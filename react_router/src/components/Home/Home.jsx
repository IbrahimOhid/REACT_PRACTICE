

function Home() {
  return (
    <div>
<div className="flex justify-center  bg-blue-900 p-5 md:p-16 lg:p-28">
    <div className="flex flex-col text-center justify-center items-center max-w-7xl  text-white">
        <h1 className="text-base font-medium tracking-wider ">Welcome to my Client Template</h1>
        <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; </span>
        <div className="flex flex-col text-white mt-5">
            <h1 className="text-4xl md:text-[50px] font-semibold">Hello I'm John Watson</h1>
            <p className="text-xl mt-2 md:mt-4 tracking-wide">Designer - Developer - Freelancer</p>
        </div>
        <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Tailblocks provides best Tailwind CSS
            components. Visit our website and feel free to give feedback. With the help of Tailblocks, a user can
            build a website in a much lesser time.</p>
        <div className="space-x-3 mt-6 md:mt-4">
            <a href="#"> <i
                    className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>

        </div>
        <div className="flex mt-10 space-x-5">
            <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">Read More</button>
            <button
                className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
                Me</button>

        </div>
    </div>
</div>
    </div>
  )
}

export default Home