export default function Form({first, firstValue}){
    

    return(
      <div className="flex justify-center mt-12">
        <form className="w-[85%]" action="meme words">
          <div className="flex md:flex-row flex-col gap-[17px] mb-4">
            <input value={props.first} onChange={props.firstValue} placeholder="please write some" id="first" className="w-full py-2 outline-none pl-3 rounded-md border-2 border-gray-400" type="text" />
            <input value={props.second} onChange={props.secondValue} placeholder="write some yeah" id="second" className="w-full py-2 outline-none pl-3 rounded-md border-2 border-gray-400" type="text" />
          </div>
          <div className="flex justify-center">
            <button onClick={props.submition} className="bg-[#8924ad] w-full py-3 rounded-md text-white text-[20px] font-bold">Get a new meme image  🖼</button>
          </div>
          </form>
      </div>
  )
}
