export default function Header(){
  return(
    <header className="flex justify-center h-16  bg-fuchsia-700 text-white">
            <div className="flex md:w-[95%] w-[80%] justify-between">
              <div className="flex gap-[6.69px]">
                <div className=" flex flex-col justify-center w-[41px]">
                <img className="" src="/assets/icons/logo.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold md:block hidden text-[20.7px]">Meme Generator</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-[500]">React Course - Project 3</p>
              </div>
            </div>
          </header>
  )
}