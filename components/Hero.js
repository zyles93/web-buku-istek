import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.div>
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
                {/* <span className="absolute left-0 -z-10 md:scale-125">
                  <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#3CCF4E"
                      d="M10.5,-12.4C17.3,-9.5,28.9,-11.4,28.2,-10C27.5,-8.6,14.5,-4.1,14.7,7.8C15,19.7,28.6,38.9,28.4,43.5C28.2,48.1,14.1,38.1,1.7,35.7C-10.7,33.4,-21.3,38.7,-35.4,38.6C-49.5,38.5,-67.1,33,-64.9,24.7C-62.6,16.3,-40.6,5.1,-36.2,-12.8C-31.8,-30.8,-45.1,-55.5,-42,-59.6C-38.9,-63.7,-19.4,-47.1,-8.8,-35C1.9,-22.9,3.7,-15.3,10.5,-12.4Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span> */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
