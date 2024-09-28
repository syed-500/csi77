

import React from 'react';
Window.React = React
import Header from './Header';
import ExecomTeam from './Execom';
import '../../src/style.css';
import Maaz from '../assets/Gb/Maaz.jpeg';
import Mannan from '../assets/Gb/Mannan.png';
//import Ahmed from '../assets/Gb/Ahmed.heif';
import AhmedCC from '../assets/Gb/AhmedCC.jpg';
import AhmeHussaini from '../assets/Gb/Ahmed Hussain.jpeg';
import Mehveen from '../assets/Gb/Mehveen.jpg';
import Rania from '../assets/Gb/Rania.jpeg';
import Rasheed from '../assets/Gb/Rasheed.jpeg';
import Raushaan from '../assets/Gb/Raushaan.jpeg';
import Rayyan from '../assets/Gb/Rayyan.jpg';
import Shafi from '../assets/Gb/Shafi.jpeg';
import Shakaib from '../assets/Gb/Shakaib.jpg';
import Taufeeq from '../assets/Gb/Taufeeq.jpeg';
// import { position } from '@chakra-ui/react';
import LinkdinLogo from "../assets/social-logo/icons8-linkedin-50.png"
import GithubLogo from "../assets/social-logo/icons8-github-50.png"
import InstagramLogo from "../assets/social-logo/icons8-insta-50.png"

const teamMembers = [
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
        <div>
            <Header />
            <Team teamMembers={teamMembers} />
        </div>
    );
};



const Team = ({ teamMembers }) => {
    // return (
    //     <div className=' w-[520px] sm:w-[1200px] md:w-[1300px] ml-[100px]'>
    //         <Header />
    //         <br>
    //         </br>
    //         <br></br>
    //         <div className='flex justify-center ml-30 mt-10 py-10 '>
    //                 <h1 className=" text-[55px]  sm:text-[80px] text-center text-white leading-[80px]  flex-1 font-poppins font-bold">
    //                     TEAM CSI <br /> 2023-2024
    //                 </h1>
    //         </div>
    //         <div className='h-18 bg-white'>

    //         </div>
    //         <h1  className='flex ml-5 items-center justify-center my-10 text-[50px]'>GB 23-24</h1>
    //         <section className='our__team mb-[120px] mr-[200px]  ml-[100px] w-[520px] sm:w-[1200px] md:w-[1300px]'>
    //             <div className='container'>
    //                 <div className="row">
    //                     {/* mapping over each of the cards with content  */}
    //                     {teamMembers.map((content, index) => (
    //                         <Card key={index} content={content} />))}
    //                 </div>
    //                 <div className='h-32'></div>
    //             </div>
    //         </section>
    //         <h1 style={{ fontSize: "50px", textAlign:'center' }} className='pt-20 pb-10'> Execom 23-24</h1>
    //         <ExecomTeam /> 


    //     </div>
    // )
    return (
      <>
      <div className='w-full sm:w-[80%] md:w-[85%] lg:w-[85%] lg:ml-15 sm:ml-25 mr-auto '>
        <Header />
        <br />
        <br />
        <div className='flex justify-center mt-10 py-10'>
          <h1 className="text-[40px] sm:text-[55px] md:text-[80px] text-center text-white leading-tight font-poppins font-bold">
            TEAM CSI <br /> 2023-2024
          </h1>
        </div>
        <div className='h-18 bg-white'></div>
        <h1 className='flex items-center justify-center my-10 text-[35px] sm:text-[50px]'>GB 23-24</h1>
        <section className='our__team mb-[60px] mx-auto h-full w-full sm:w-[70%] md:w-[85%] lg:w-[100%]'>
          <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:m-auto gap-10 gap-y-10 mb-16">
              {/* mapping over each of the cards with content  */}
              {teamMembers.map((content, index) => (
                <Card key={index} content={content} />
              ))}
            </div>
            <div className='h-32'><br></br></div>
          </div>
        </section>
        <h1 style={{ fontSize: "35px", textAlign: 'center' }} className='pt-20 pb-10 sm:text-[50px]'>Execom 23-24</h1>
       
      <ExecomTeam />
      </div>
      </>
    )
       
  
  
}


function Card({ content }) {
    return (
        <div className="Cardcomp">
        <div className="our-team  h-[27rem] mx-auto ">
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