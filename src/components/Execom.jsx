import '../css/execom.css'
import defautPic from '../assets/execom-pics/default-avatar-icon-of-social-media-user-vector.jpg'
import LinkdinLogo from "../assets/social-logo/whitelinkdin.png"
import InstagramLogo from "../assets/social-logo/instawhite.png"
import GithubWhite from "../assets/social-logo/icons8-githubwhite.png"
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
    name: "Afra Ahmed",
    position: "Associate Head",
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
      <section className=" our__team1 mx-auto p-5 w-full max-w-[1100px]">
        {/* Tech */}
        <div className=" container mb-10">
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

          {/* Team Cards */}
          <div className="team__wrapper1 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Obj.map((item) => (
              <ExeCard key={Math.random()} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function ExeCard({ item }) {
  return (
    <div className='card py-[15px] pt-[10px] '>
      {/* <img className='pic-circle ml-[15px] mt-2' style={{objectFit:"initial"}} src={item.imgUrl} alt="random image" /> */}
      <img className='pic-circle mt-4 ml-[55px]' style={{ objectFit: "initial" }} src={item.imgUrl === "" ? defautPic : item.imgUrl} alt="random image" />
      <div className='flex flex-col gap-2 mt-1 py-[2px] px-[2px] align-middle justify-center ' style={{}}>

        <center>
          <p className='text-[15px] mt-3'>{item.name}</p>
          <button disabled className='mt-3 bg-white font-semibold px-3 py-2 rounded-2xl   text-black text-[13px] ' >{item.position}</button>
        </center>
        <div className='flex flex-row items-center mt-3 gap-5 pl-[65px]'>
          <a href="" title="LinkedIn"><img className='w-6 ' src={LinkdinLogo} alt="LinkedIn Logo" /></a>
          <a href="" title="GitHub"><img className='w-6 ' src={GithubWhite} alt="GitHub Logo" /></a>
          <a href="" title="Instagram"><img className='w-6' src={InstagramLogo} alt="Instagram Logo" /></a>
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
