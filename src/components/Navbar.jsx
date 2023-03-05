import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";

export default function Navbar() {
  return (
    <div className="flex justify-around  py-4 px-5 items-center gap-5 bg-[#272831]">
      <div className="flex">
        {/* <img src="" alt="logo" /> */}
        <h1 className="text-xl font-bold text-pink-600">EtherX.</h1>
      </div>
      <div className=" flex gap-2 px-2 py-2 items-center rounded-md h-8 bg-black opacity-90   outline-none">
        <img src={search} alt="" className=" w-5 h-5 text-white" />
        <input
          placeholder="Search services here.."
          type="text"
          size="50"
          className="rounded-md h-8 bg-black opacity-90   outline-none"
        />
      </div>
      <div className="flex gap-9">
        <Link className="transition delay-75 ease-in-out hover:text-pink-600">
          Explore
        </Link>
        <Link className="transition delay-75 ease-in-out hover:text-pink-600">
          Community
        </Link>
        <Link className="transition delay-75 ease-in-out  hover:text-pink-600">
          Purchasing
        </Link>
      </div>
      <div className="flex gap-6">
        <button className="hover:opacity-80 px-8 py-1 rounded bg-gradient-to-br from-pink-600 via-pink-500 to-purple-600">
          Create
        </button>
        <button className="hover:outline-dashed outline px-8 py-1 rounded text-pink-600">
          Connect
        </button>
      </div>
    </div>
  );
}
