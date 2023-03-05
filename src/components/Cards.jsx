import React from "react";

export default function Cards(props) {
  return (
    <div className=" py-2">
      <div className="shadow-xl flex flex-col bg-[#33343f] border-black overflow-hidden text-center items-center h-60 rounded-2xl">
        <div className="flex h-[82%] w-full bg-white ">
          <img src={props.image} alt="" className="w-full" />
        </div>
        <div className="mt-2">
          <a className="cursor-pointer">{props.desc}</a>
        </div>
      </div>
    </div>
  );
}
