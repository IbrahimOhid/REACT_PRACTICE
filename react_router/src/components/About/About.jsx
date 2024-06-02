function About() {
  return (
    <div>
      <div className="flex justify-center  p-4 bg-slate-200">
        <div className="flex flex-col justify-center items-center text-center">
          <div className=" my-2 flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div>
              <div className="flex flex-col  justify-center items-center ">
                <div className="overflow-hidden w-full md:w-3/4 m-4 flex flex-col justify-center    rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-center   ">
                    <div className="  items-center justify-center flex py-2">
                      <div className="flex flex-col  items-center justify-center text-center">
                        <div className="text-stone-600  m-2 px-8 text-xl font-bold text-3xl">
                          Tailblocks provides best Tailwind CSS Components and
                          Blocks to create an unique websites within minutes. It
                          has upto 60+ free components for Web Development.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="https://source.unsplash.com/100x100/?man,boy"
                    alt=""
                    className="rounded-full h-20 w-20"
                  />
                  <div className="text-stone-600 text-lg font-bold m-1">
                    John Richard
                  </div>
                  <div className="text-stone-500 text-lg font-medium ">
                    SEO Executive, Tailblocks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
