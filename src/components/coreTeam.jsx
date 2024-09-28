import '../../src/core.css'
export const CTeam = () => {



  const data = [
  
      { name: "Mohammad Mutahhar Aquib", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Mateen", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Syed Muqeem Ahmed", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Abrar Akram Farooque", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed mouzam", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Shaik Irfan", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Abdul Hameed Khan", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Osman Bin Nasir", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Talha Ahmed Siddiqui", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Aaqil Mohammad Adil Baig", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "ABDUL SALAAM", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Adeeba unnisa", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Syed Imran", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Shaik Mohammed Baharmoos", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Shaik Asraan", role: "Web", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Irfaan Khan", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Syed younus ahmed", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Iqra fatima", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Ayesha Mirza", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Aqueel", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "amatul ghani noorain", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "mohammed umar salam", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Kaashif Ameen", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohd Wasay Mazher", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Abdul Ismail Farooq", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Mahroz Uddin Hamza", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Meer Aymaan Ali", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Shaik Mohammed Aliyaan", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Azim Moula", role: "Tech", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Abdullah Khulaidi", role: "Events", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Saniya Sultana", role: "Events", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Afroze shaik", role: "Events", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Shaikh Salman", role: "Events", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "MOHAMMED ISMAIL CHOWDRY", role: "Events", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "BATER IBRAHIM KHAN", role: "Editorial", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Maheeya Wajahat", role: "Editorial", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Rehmath unnisa", role: "Editorial", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Faiza mahveen", role: "Editorial", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Yahya Hussain", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Rayyan Ahmed Siddiqi", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Syeda Fatima Hussaini", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Mohammed Ayan", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Ahamadi Hareem", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "syeda fayeqa nabeel", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Haifa Nazeer", role: "HR", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Ali Mohammed Lalani", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Raza mohammed", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Syed Saadullah Ghazi", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mir ahtesham ali", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Hasan Ahmed Siddiqi", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Samiuddin", role: "Marketing", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Afifa firdous", role: "Design", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Nusrah Khan", role: "Design", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Md Himayath Ali", role: "Design", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Azeem Uddin Siddiqui", role: "Media", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Hasifa Ammara", role: "Media", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "ATIF ALI KHAN", role: "Media", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
      { name: "Abdullah Hussain Shaikh", role: "Operations", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Syed Abdul Rahman Hussaini", role: "Operations", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Syed Shah Omer Hussaini", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Syed Hariz", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Kazim Ali Qizer", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Ikram", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Rafi Uddin", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },
  { name: "Mohammed Altaf Hussain", role: "Enthusiasts", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" },

    
    
  ];
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-5xl text-white uppercase rounded-full bg-teal-accent-400">
                Core Team
                            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{' '}
          </h2>
          <p className="text-base text-white md:text-lg">
           Meet our talented and exceptional core team!!!
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
       { data.map((item, index) => (
    <div key={index} className="flex" id="coreid">
      <img
        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
        src={item.imageSrc}
        alt={item.name}
      />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">{item.name}</p>
        <p className="text-sm text-gray-200" style={{border:"1px solid wheat",borderRadius:"70px",borderWidth:"2px",width:"90px",backgroundColor:"darkviolet"}}>{item.role}</p>
        
      </div>
    </div>
  ))}
          {/* <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-200">Product Manager</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="text-sm text-white">Design Team Lead</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Anthony Geek</p>
              <p className="text-sm text-white">CTO, Lorem Inc.</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="text-sm text-white">Human Resources</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Martin Garix</p>
              <p className="text-sm text-white">Bad boy</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Andrew Larkin</p>
              <p className="text-sm text-white">Backend Developer</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Sophie Denmo</p>
              <p className="text-sm text-white">Designer UI/UX</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Benedict Caro</p>
              <p className="text-sm text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Adam Molly</p>
              <p className="text-sm text-white">Full Stack Developer</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  };