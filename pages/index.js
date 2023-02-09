import Header from "../components/header"
import Form from "../components/form"
import Meme from "../components/meme"
import data from "../components/data";  
import Things from "../components/things";
import { useEffect, useState } from "react";

export default function Home() {
  let x = 3;
  // const images = data;
  const [random, setRandom] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [first,setFirst]=useState("");
  const [second,setSecond]=useState("");
  const [info, setInfo] = useState(["SHUT UP","TAKE MY MONEY"]);
  const [id, setId]=useState(0);
  const regex = /^\s*$/;

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(content => setRandom(content.data.memes[id].url))
  },[id])

  return (
    <section className="justify-center flex bg-[#9657dea6]">
      <section className="max-w-7xl w-full">
        <section className="flex justify-center">
          <div className="md:w-[60%] bg-white h-[100vh]">
            <Header/>
            <Things/>
            <Form
              first = {first}
              second = {second}
              firstValue={(e)=>setFirst(e.target.value)}
              secondValue={(e)=>setSecond(e.target.value)}
              submition={(e)=>{
                e.preventDefault(); setInfo([first,second]); setFirst(""); setSecond(""); 
                setId(Math.floor(Math.random()*100));
                if(first=="" || second=="" || regex.test(first) || regex.test(second) ){
                  alert("please fill the inputs");
                  setInfo(["That can only"," mean one thing"]);
                  setId(0);
                }
              }
            }
            />
            <Meme
              firstMeme={info[0].toUpperCase()}
              secondMeme={info[1].toUpperCase()}
              meme={random}
            />
          </div>
        </section>
      </section>
    </section>
  )
}


// export default function Things(){
//   const [item,setItem] = useState([]);
//   const [input,setInput] = useState("")
//   return(
//     <div className="flex justify-center font-bold mt-4">
//       <div>
//         <form action="">
//         <div className="flex justify-center">
//         <textarea rows="4" cols="50" className="border pl-2" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//         </div>
//         <div className="flex justify-center mt-2">
//         <button  onClick={(e)=>{e.preventDefault(); setItem((current)=>[...current,`${input}`]); setInput("")}} className="border-2 bg-purple-500 rounded-xl px-8 py-2">Add new item +</button>
//        </div>

//         </form>
//         <div className="flex justify-center">
//         <ul>
//           {
//             item.map((x,y)=>
//             <li key={y}>{x}</li>
//             )
//           }
//         </ul>
//         </div>
//       </div>

//     </div>
//   )
// }