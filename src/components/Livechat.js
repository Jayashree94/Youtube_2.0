import React, { useEffect, useState } from "react";
import { Chatmessage } from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generaterandomname, randomMessage } from "../utils/helper";

export const Livechat = () => {
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      console.log("Pol");
      dispatch(
        addMessage({
          name: generaterandomname(),
          message: randomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);


  return (
    <>    
    <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      <div>
      {chatmessage.map((c, index) => (
        <Chatmessage key={index} name={c.name} message={c.message} />
      ))}
      </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black flex">
        <input className=" px-2 w-96" value= {liveMessage} type="text" onChange={(e)=> setLiveMessage(e.target.value)}></input>
        <button className="px-4 mx-2 bg-green-300 rounded-lg">Send</button>
      </form>
      </>
    
  );
};


export default Livechat;
