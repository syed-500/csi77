


const Content = () => {
  return (
    <div className='w-[400px]'>
        <div className='rounded-t-3xl bg-white relative'>
            <img className='w-fit rounded-t-3xl' src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
            
            {/* top-[160px] right-[10px] */}
        </div>
        <div className='rounded-b-xl  mt-[-10px] flex flex-col items-left bg-slate-600 p-5 text-white'>
            <button className=' bg-black mt-2 mb-3 text-white p-3  rounded-full'> AI Finity </button>
            <p>
            🔍 Unlock the secrets of Generative AI at our exclusive workshop designed just for you! 
            </p>
            <p>📅 Date: April 27, 2024</p>
            <p className='p-3 mt-3 bg-white rounded-xl font-bold font-xl text-black'>Hosted By : Taufeeq Noamaan</p>
        </div>
   </div>
  )
}

export default Content
