

import React, { useState } from 'react';

export default function Things(){
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  return(
    <>
    <form action="">
      <div className="flex justify-center gap-4 mt-4">
        <input value={input} onChange={(e)=> setInput(e.target.value)} className="border-2 rounded-xl p-2 outline-none" type="text" />
        <button onClick={(e)=> {e.preventDefault(); setItem((current)=>[...current, `${input}`]);setInput("")}} className="bg-cyan-500 px-4 rounded-xl font-bold hover:bg-cyan-600">ADD</button>
      </div>
    </form>
      <ul>
        {
          item.map((x, idx) =>
            <li key={idx}>{x}</li>
          )
        }
      </ul>
    </>
  )
}
