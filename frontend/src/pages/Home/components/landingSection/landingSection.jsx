import { IconBook } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import headerImg from '../../../../assets/hero-img.png'
import ButtonPrimary from "../../../../components/button/buttonPrimary";

export default function LandingSection() {
  return (
    <section className='lg:flex justify-between items-center w-full lg:h-screen min-h-screen'>
      <div className='px-3 xl:px-20 lg:px-10 lg:mt-10 mt-32 lg:text-left text-center'>
        <h1>Buat Ruangan <span className='text-emerald-950 font-bold lg:text-5xl text-3xl'>Estetik</span> dengan Poster yang Dapat Dikustomisasi</h1>
        <p className='max-w-[500px] lg:mt-4 mt-8 text-brown-400 mx-auto lg:mx-0'>Kami menyediakan Jasa pembuatan poster Impian anda  dengan Layanan <Link className='border-b border-brown-400'>Desain Poster Sesuai Permintaan</Link></p>
        <h2 className='mt-12'>Ingin poster yang lebih praktis, namun tetap manis? </h2>
        <Link to={'/1'} className='block hover:border-b-0 max-w-[292.21px] h-[50px] w-full mt-4 lg:mx-0 mx-auto'>
          <ButtonPrimary tSize="sm" wSize="full" hSize="full">
            <IconBook stroke={2.1} color='#FAECB8' />
            LIHAT KATALOG
          </ButtonPrimary>
        </Link>
      </div>
      <img src={headerImg} alt="" className='md:h-full lg:w-auto w-full lg:mt-0 mt-10' />
    </section>
  )
}