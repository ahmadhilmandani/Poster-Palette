import { Link } from 'react-router-dom'
import headerImg from '../../assets/hero-img.png'
import { IconBook, IconPaint } from '@tabler/icons-react'
import { IconPhoto } from '@tabler/icons-react'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <LandingSection />
      <ServiceSection />
      <OurPosterSection />
    </main>
  )
}

function LandingSection() {
  return (
    <section className='flex justify-between items-center w-full h-screen'>
      <div className='pl-20 mt-10'>
        <h1 className='text-5xl leading-[150%]'>Poster Pribadi yang <span className='text-emerald-950 font-bold'>Mencerahkan</span> Setiap Sudut Ruangan Anda.</h1>
        <p className='max-w-[555px] leading-[150%] mt-4 tracking-[0.5691px] text-brown-300'>Kami menyediakan Jasa pembuatan poster Impian anda  dengan Layanan <Link className='border-b border-brown-300'>Desain Poster Sesuai Permintaan</Link></p>
        <h2 className='text-2xl leading-[150%] mt-12'>Ingin poster yang lebih praktis, namun tetap manis? </h2>
        <Link to={'/1'} className='hover:border-b-0 hover:opacity-90 flex justify-center items-center gap-2 max-w-[292.21px] max-h-[65px] w-full mt-4 py-4 bg-emerald-950 font-medium rounded-md'>
          <IconBook stroke={1.6} color='#D7C39C' />
          <span className='text-brown-300'>LIHAT KATALOG</span>
        </Link>
      </div>
      <img src={headerImg} alt="" className='md:h-full' />
    </section>
  )
}

function ServiceSection() {
  return (
    <section>
      <div className='bg-brown-100 w-full min-h-[366px] py-10 px-20'>
        <h1 className='text-5xl'>Layanan Menarik Kami!</h1>
        <div className='mt-12 flex justify-between lg:gap-x-[150px]'>
          <div className='flex flex-1 items-start gap-7'>
            <div className='bg-emerald-950 rounded-md p-3'>
              <IconPaint stroke={2} size={44.1} color='#D7C39C' />
            </div>
            <div>
              <h2 className='text-emerald-950 text-2xl'>Cocokan warna poster dengan ruangan anda</h2>
              <div className='text-brown-400 mt-5'>
                Tidak perlu bingung lagi untuk menyesuaikan warna poster dengan ruangan anda! karena anda dapat langsung merubah warna poster di web kami!
              </div>
            </div>
          </div>
          <div className='flex flex-1 items-start gap-7'>
            <div className='bg-emerald-950 rounded-md p-3'>
              <IconPhoto stroke={2} size={44.1} color='#D7C39C' />
            </div>
            <div>
              <h2 className='text-emerald-950 text-2xl'>Kami siap menerima permintaan desain poster yang anda inginkan!</h2>
              <div className='text-brown-400 mt-5'>
                Anda dapat memesan jasa desain poster kepada kami apabila anda tidak menemukan poster anda inginkan di katalog kami!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-brown-200 w-full min-h-[126px] flex items-center justify-center'>
        <div className='text-center flex-1'>
          <b className='block'>3+</b>
          Tahun Beroberasi
        </div>
        <div className='text-center flex-1 border-r border-l border-brown-300'>
          <b className='block'>13.413</b>
          Poster Terpesan
        </div>
        <div className='text-center flex-1'>
          <b className='block'>2.000+</b>
          Pengguna Aktif
        </div>
      </div>
    </section>
  )
}

function OurPosterSection() {
  return (
    <section className='w-full min-h-screen'>

    </section>
  )
}