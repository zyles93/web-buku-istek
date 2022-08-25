
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Profile = () => {
  return (
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-warna-green mb-3 text-lg lg:text-3xl lg:mb-5">Tentang Kami</h4>
              <h3 className="font-bold text-warna-black text-2xl mb-3 max-w-sm lg:text-4xl lg:mb-5">ISTEK-AK Press Agen Penerbit Buku !</h3>
              <p className="text-warna-slate text-base mb-2 lg:text-lg">
                Garis depan institut yang keberadaannya menjadi ikon bagi perkembangan dan kemajuan ilmu pengetahuan. Kualitas dan Kuantitas Buku yang akan diterbitkan dapat menjadi tolak ukur mutu bagi intitut. ISTEK-AK Press merupakan
                Pusat Penerbitan dan Percetakan
                <a href="home.istekaisyiyah.ac.id/" target="_blank" className="text-warna-green">
                  ISTEK 'Aisyiyah Kendari'
                </a>
                dibawah lembaga penelitian dan Pengabdian Masyarakat (LPPM) yang memiliki kewenangan sebagai penerbit dan percetakan institut sesuai dengan Keputusan Rektor <span className="font-bold">No.149/SK/ISTEK-AK/V/2022</span>
              </p>
              <p>
                <a href="" className="text-warna-slate hover:text-warna-green">
                  Selengkapnya ...
                </a>
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:pt-20">
              <h3 className="font-semibold text-warna-black text-2xl mb-4 lg:text-4xl lg:mb-5">Bergabung Bersama Kami</h3>
              <div className="text-base text-warna-slate lg:text-lg">Untuk mendapat informasi lebih lanjut dapat bergabung bersama kami dan like media sosial kami !</div>
              <div className="flex items-center justify-center mt-3 gap-3">
                <a href="" className="p-2 bg-warna-green rounded-full text-warna-white transition-all ease-in-out duration-300 hover:bg-warna-hover hover:shadow hover:scale-125">
                  <FaFacebookF className="" />
                </a>
                <a href="" className="p-2 bg-warna-green rounded-full text-warna-white transition-all ease-in-out duration-300 hover:bg-warna-hover hover:shadow hover:scale-125">
                  <AiFillInstagram />
                </a>
                <a href="" className="p-2 bg-warna-green rounded-full text-warna-white transition-all ease-in-out duration-300 hover:bg-warna-hover hover:shadow hover:scale-125">
                  <MdMarkEmailRead />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Profile;
