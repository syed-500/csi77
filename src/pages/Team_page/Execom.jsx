import defautPic from '../../assets/execom-pics/default-avatar-icon-of-social-media-user-vector.jpg'
import LinkdinLogo from "../../assets/social-logo/whitelinkdin.png"
import InstagramLogo from "../../assets/social-logo/instawhite.png"
import GithubWhite from "../../assets/social-logo/icons8-githubwhite.png"
import Github from "../../assets/social-logo/github-mark-white.png"

import { useState } from 'react'

const Tech = [
  {
    imgUrl: "",
    name: "Ameena Begum",
    position: "Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Azim Moula",
    position: "Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Abdul Rafey Waleed",
    position: "Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Iqra Fatima",
    position: "Associate Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Syed Abdullah Ghouri",
    position: "Associate Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Haifa Nazeer",
    position: "Associate Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Syed Muqeem Ahmed",
    position: "Associate Head",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Amatul Ghani Noorain",
    position: "Member",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Shaik Faija",
    position: "Member",
    Stream: "Tech",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Web = [
  {
    imgUrl: "",
    name: "Maaz Waheed",
    position: "Head",
    Stream: "Web",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Shaik Sohail",
    position: "Head",
    Stream: "Web",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Aaqil Mohammed Adil Baig",
    position: "Head",
    Stream: "Web",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Events = [
  {
    imgUrl: "",
    name: "Saniya Sultana",
    position: "Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Abdullah Yar Khan",
    position: "Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Anasullah",
    position: "Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Ahamadi Hareem",
    position: "Associate Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Iram Fatima",
    position: "Associate Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Moazzam Mukarram Shareef",
    position: "Associate Head",
    Stream: "Events",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Design = [
  {
    imgUrl: "",
    name: "Syeda Noor Fatima",
    position: "Head",
    Stream: "Design",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Amatullah Ummamah",
    position: "Associate Head",
    Stream: "Design",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Abdul Haseeb Khan",
    position: "Associate Head",
    Stream: "Design",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Nusrah Khan",
    position: "Associate Head",
    Stream: "Design",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Afifa Firdous",
    position: "Associate Head",
    Stream: "Design",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Media = [
  {
    imgUrl: "",
    name: "Md Atif Ali Khan",
    position: "Head",
    Stream: "Media",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Editorial = [
  {
    imgUrl: "",
    name: "Mohammadi Fatima",
    position: "Head",
    Stream: "Editorial",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Omer Waheed Khan",
    position: "Head",
    Stream: "Editorial",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Maheeya Wajahat",
    position: "Associate Head",
    Stream: "Editorial",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Amina Hasanaath",
    position: "Associate Head",
    Stream: "Editorial",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const HR = [
  {
    imgUrl: "",
    name: "Rayyan Shaji Ansari",
    position: "Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Bater Ibrahim Khan",
    position: "Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Alimuddin",
    position: "Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Husna Begum",
    position: "Associate Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mir Danish Ahmed",
    position: "Associate Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Hasifa Ammara",
    position: "Associate Head",
    Stream: "HR",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Marketing = [
  {
    imgUrl: "",
    name: "Salman Mohammed Arif",
    position: "Head",
    Stream: "Marketing and Publicity",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Samiuddin",
    position: "Head",
    Stream: "Marketing and Publicity",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Rehmath Unnisa",
    position: "Associate Head",
    Stream: "Marketing and Publicity",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Mohammed Abdul Wahab",
    position: "Associate Head",
    Stream: "Marketing and Publicity",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Syeda Adeeba Maryam",
    position: "Associate Head",
    Stream: "Marketing and Publicity",
    linkdin : "",
    github : "",
    insta : ""
  }
];

const Operations = [
  {
    imgUrl: "",
    name: "Abdullah Hussain Shaikh",
    position: "Head",
    Stream: "Operations",
    linkdin : "",
    github : "",
    insta : ""
  },
  {
    imgUrl: "",
    name: "Sami Ahmed",
    position: "Head",
    Stream: "Operations",
    linkdin : "",
    github : "",
    insta : ""
  }
];





const ExecomTeam = () => {
  const [Obj, setObj] = useState(Tech);
  const [isActive, setActive] = useState(Tech);

  function handleObj(object) {
    setObj(object);
    setActive(object);
  }

  const ItemButton = [Tech, Events, Design, Media, Editorial, HR, Marketing, Web, Operations];

  return (
    <>
      <section className="mx-auto p-5 w-full max-w-[1100px] overflow-x-hidden mt-8">
        {/* Tech */}
        <div className="mb-10">
          {/* Buttons Container */}
          <div className="flex gap-3 pb-12 align-center justify-center flex-wrap">
            {ItemButton.map((item) => (
              <ButtonReq
                key={item}
                handleObj={handleObj}
                item={item}
                isActive={item === isActive}
              />
            ))}
          </div>

          {/* Team Cards Container */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1200px]">
              {Obj.map((item) => (
                <ExeCard key={Math.random()} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function ExeCard({ item }) {
  return (
    <div className='bg-[#1a1a1a] w-full max-w-[300px] mx-auto rounded-xl p-6 transform transition duration-300 hover:scale-105 shadow-xl'>
      <div className='flex flex-col items-center'>
        {/* Profile Image */}
        <div className='w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-full mb-6 border-4 border-gray-700'>
          <img 
            className='w-full h-full object-cover'
            src={item.imgUrl === "" ? defautPic : item.imgUrl} 
            alt={item.name} 
          />
        </div>

        {/* Content */}
        <div className='text-center w-full'>
          <h3 className='text-[16px] font-semibold mb-3 text-white'>{item.name}</h3>
          <button disabled className='bg-white  font-semibold px-4 py-2 rounded-2xl text-gray-900 text-[13px] mb-4 border border-gray-700'>
            {item.position}
          </button>
          
          {/* Social Links */}
          <div className='flex justify-center gap-6 mt-4'>
            <a 
              href={item.linkdin || "#"} 
              className="transform transition hover:scale-110"
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img className='w-7' src={LinkdinLogo} alt="LinkedIn" />
            </a>
            <a 
              href={item.github || "#"} 
              className="transform transition hover:scale-110"
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img className='w-7' src={Github
              } alt="GitHub" />
            </a>
            <a 
              href={item.insta || "#"} 
              className="transform transition hover:scale-110"
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
            >
              <img className='w-7' src={InstagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonReq({ handleObj, item, isActive }) {
  const string = item[0].Stream;
  return (
    <button
      className={`p-3 md:p-4 text-base md:text-lg font-semibold rounded-xl text-zinc-700 ${isActive ? 'bg-red-300' : 'bg-zinc-200'}`}
      onClick={() => handleObj(item)}
    >
      {string}
    </button>
  );
}

export default ExecomTeam;
