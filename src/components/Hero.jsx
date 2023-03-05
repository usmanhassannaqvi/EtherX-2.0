import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {CardData} from "../helpers/CardData"
import Cards from "./Cards";
import Slider from "./Slider";
import IntroVideo from "../assets/VIdeoAssets/Intro.mp4"

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Powered by BlockChain",
      "Pakistan's first freelance Marketplace",
      "Supervised by Dr. Farhan",
      "Co-Supervised by Tahreem Saeed",
      "Final Year Project",
    ],
    loop: {},
  });

  return (
    <div className="  w-[80%] m-auto overflow-hidden">
      {/* Main Rectangle Showcase */}
      <div className="shadow-xl px-10  flex items-center text-center bg-gradient-to-tr from-pink-600 via-pink-500 to-purple-500 rounded-3xl h-56 mt-10 ">
        <div className="flex flex-col  w-[70%] gap-4 ">
          <div className="text-left text-4xl">
            Discover, buy and sell awesome services & NFTs
          </div>
          <div className="text-left text-lg font-thin tracking-widest">
            <p>#{text}</p>
          </div>
          {/* <div className="text-lg font-thin tracking-widest text-center">
          <p> Supervised By <span className="text-black">{text}</span><Cursor/></p>
          </div> */}
        </div>
      </div>

      {/* Explore Slider */}
      <div className="mt-10">
        <div className="text-xl">Top Sellers</div>
        <div className=" "></div>
        <Slider />
      </div>

      {/* 6 Cards */}
      <div className="mt-10">
        <div className="text-xl">
          Explore
          
        </div>
        <div className="grid grid-cols-3 gap-5">
          {CardData.map((cardVal,keys)=>{
            return(
              <>
              <Cards image={cardVal.image} desc={cardVal.desc} />
              </>
            )
          })}
          
          
        </div>
      </div>

      {/* EtherX Intro Video */}
      <div className="mt-10 flex h-auto">
        <div className="flex flex-col w-[50%] justify-center gap-3">
          <h1 className="tracking-widest">Al-Rumi</h1>
          <h1 className="rumi text-4xl w-[90%] italic">"The Universe is not outside of you. Look inside of yourself everything you want, you already are."</h1>

        </div>
        <div className="w-[50%] ">
          <video src={IntroVideo} controls autoPlay muted loop></video>
        </div>

      </div>      

      <div className="mt-10">

      </div>
    </div>
  );
}
