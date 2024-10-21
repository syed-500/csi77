

import React from 'react';
Window.React = React
import ExecomTeam from '../../components/Execom';
import '../../style.css';
// import { position } from '@chakra-ui/react';
import LinkdinLogo from "../../assets/social-logo/icons8-linkedin-50.png"
import GithubLogo from "../../assets/social-logo/icons8-github-50.png"
import InstagramLogo from "../../assets/social-logo/icons8-insta-50.png"

const GovMembers = [
  { imgUrl: "", name: "Rania Mehreen Farooq", position: "Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Mohammed Abdul Rasheed", position: "Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Taufeeq Noamaan", position: "Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Muhammad Affan Asif", position: "Associate Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Mariya Hussain", position: "Associate Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Touseef", position: "Associate Chief Coordinator", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Shakaib Ahmed Mohammed", position: "General Secretary", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Mohammed Abdul Adil", position: "Associate General Secretary", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Syed Shafi", position: "Chief Representative", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Zaina Fatima Abedi", position: "Chief Representative", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Habeeb Saleh", position: "Tech Captain", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Syed Kashif", position: "Tech Captain", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Mohammed Omer", position: "Tech Captain", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Shaik Amaan Basha", position: "Treasurer", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Sharfi Raushaan", position: "Advisor of Collaboration & Communication", linkedin: "", github: "", insta: "" },
  { imgUrl: "", name: "Mohammed Azeem Uddin Siddiqui", position: "Advisor of Student Affairs", linkedin: "", github: "", insta: "" }
];

const YourComponent = () => {
    return (
        <div className=' md:ml-0 w-full  flex flex-col justify-self-center items-end bg-blue-700'>
            <Team teamMembers={GovMembers} />
        </div>
    );
};



const Team = ({ teamMembers }) => {
    return (
      <>
      <div className=' flex flex-col sm:bg-slate-200 justify-center items-center h-full w-full sm:w-[80%] md:w-[85%] lg:w-[85%]  '>
        <br />
        <br />
        <div className=' flex justify-center items-center w-full mt-10 py-10 sm:bg-red-700'>
          <h1 className="text-[40px] sm:text-[55px]  md:text-[80px] text-center text-white leading-tight font-poppins font-bold">
            TEAM CSI <br /> 2023-2024
          </h1>
        </div>
        <div className='h-18 bg-white'></div>
        <h1 className='flex items-center justify-center my-10 text-[35px] sm:text-[50px]'>GB 23-24</h1>
        <section className='flex flex-col items-center justify-center lg:mb-0 sm:mx-10  lg:mx-auto h-full w-full sm:w-[70%]  md:w-[85%] lg:w-[100%]'>
          <div className='md:bg-green-300 w-screen flex items-center justify-center h-full'>
          <div className="mr-[100px] grid justify-between items-center sm:bg-cyan-400 w-900px md:bg-blue-200 lg:bg-red-700 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20">
              {/* mapping over each of the cards with content */}
              {teamMembers.map((content, index) => (
                <Card key={index} content={content} />
              ))}
          </div>

            <div className='h-32'><br></br></div>
          </div>
        </section>
        <h1 style={{ fontSize: "35px", textAlign: 'center' }} className='mt-[-70px] lg:pt-20 pb-10 sm:text-[50px]'>Execom 23-24</h1>
       
      <ExecomTeam />
      </div>
      </>
    )
       
  
  
}


function Card({ content }) {
    return (
        <div className="Cardcomp">
        <div className="our-team  h-[27rem] ml-[25px] md:mx-auto lg:mx-auto ">
          <div className="picture">
          <img className="img-fluid h-[inherit] w-[inherit] " src={content.imgUrl} />
          </div>
          <div className="team-content">
            <h3 className="name">{content.name}</h3>
            <h4 className="title">{content.position}</h4>
          </div>
          <ul className="social">
            <li>
              <a href="https://www.instagram.com/_shafi_0236?igsh=MTVzanA5ZXZrbXRzZg" className="fa fa-instagram"
                aria-hidden="true">
                    <img className='w-7 h-13' src={LinkdinLogo} width="350" alt="Displaying (19) Gallery Images For Linkedin Logo Png" />
                </a>
            </li>
            <li>
              <a href="https://github.com/syedshafi0986" className="fa fa-github" aria-hidden="true">
              <img className='w-7 h-13' src={GithubLogo} width="350" alt="Displaying (19) Gallery Images For Linkedin Logo Png" />

              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shafi-syed-374400211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="fa fa-linkedin" aria-hidden="true">
                    <img className='w-7 h-13' src={InstagramLogo} width="350" alt="Instagram logo 3.477 4 1 year ago" />
                </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default YourComponent;