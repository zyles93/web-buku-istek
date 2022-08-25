import React from "react";
import hero from "../assets/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-warna-black md:text-xl lg:text-2xl">
                Welcome To👋, <span className="block text-warna-green font-bold text-4xl mt-1 md:text-5xl lg:text-6xl md:py-2">ISTEK-AK.Press</span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 md:text-xl lg:text-2xl">Agent Penerbit Buku Terpercaya</h2>
              <p className="font-medium text-warna-slate mb-10 leading-relaxed">
                Mudah dan menyenangkan. <span className="text-black">Betul👍</span>
              </p>
              <a href="" className="text-base font-semibold bg-warna-green px-8 py-3 rounded-full text-warna-white transition duration-300 ease-in-out hover:shadow-lg hover:bg-warna-hover">
                Hubungi Kami
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-0 lg:right-0">
                <Image src={hero} alt="Buku Gambar" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
};

export default Hero;
