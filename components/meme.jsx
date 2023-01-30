import { useState } from "react";
export default function Meme(props){

  return(<>
    <div className="relative memeimg">
      <div className="flex justify-center mt-12">
        <img className="w-[85%] h-[400px] object-fill" src={`assets/images/${props.meme}`} alt="the meme" />
      </div>
      
      <div className="absolute top-6 w-full ">
        <div className="flex flex-col lg:gap-[12rem] md:[8rem] gap-[5rem] font-[1000] text-white text-[25px] md:text-[35px]">
          <p className="memetext text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{props.firstMeme}</p>
          <p className="memetext text-center">{props.secondMeme}</p>
        </div>
      </div>

    </div>  
    </>
  )
}
