import { IconBook } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import headerImg from '../../../../assets/hero-img.png'

export default function LandingSection() {
  return (
    <section className='lg:flex justify-between items-center w-full lg:h-screen min-h-screen'>
      <div className='xl:pl-20 lg:px-10 px-3 lg:mt-10 mt-32 lg:text-left text-center'>
        <h1 className='lg:text-5xl text-3xl lg:leading-[150%] leading-[150%]'>Poster Pribadi yang <span className='text-emerald-950 font-bold'>Mencerahkan</span> Setiap Sudut Ruangan Anda.</h1>
        <p className='max-w-[555px] leading-[150%] mt-4 tracking-[0.5691px] text-brown-300 mx-auto lg:mx-0'>Kami menyediakan Jasa pembuatan poster Impian anda  dengan Layanan <Link className='border-b border-brown-300'>Desain Poster Sesuai Permintaan</Link></p>
        <h2 className='text-2xl leading-[150%] mt-12'>Ingin poster yang lebih praktis, namun tetap manis? </h2>
        <Link to={'/1'} className='hover:border-b-0 hover:opacity-90 flex justify-center items-center gap-2 max-w-[292.21px] max-h-[65px] w-full mt-4 py-4 bg-emerald-950 font-medium rounded-md lg:mx-0 mx-auto'>
          <IconBook stroke={1.6} color='#D7C39C' />
          <span className='text-brown-300'>LIHAT KATALOG</span>
        </Link>
      </div>
      <img src={headerImg} alt="" className='md:h-full lg:w-auto w-full lg:mt-0 mt-10' />
    </section>
  )
}