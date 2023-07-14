import szA4KPondasiTerkuat from '../../../../assets/poster/a4-pondasi-terkuat.svg'
import szA4PondasiTerkuat from '../../../../assets/poster/a4-kamu-rumah.svg'
import szA4TidakMungkinKecewa from '../../../../assets/poster/a4-tidak-mungkin-kecewa.svg'

import sz20x30AllahMengampuniSemuaDosa from '../../../../assets/poster/20x30-Allah-mengampuni-semua-dosa.svg'
import sz20x30HatiYangIkhlas from '../../../../assets/poster/20x30-hati-yang-ikhlas.svg'
import sz20x30Mengenalmu from '../../../../assets/poster/20x30-mengenalmu.svg'

export default function OurPosterSection() {
  return (
    <section className='w-full min-h-screen mt-24 lg:px-0 px-3'>
      <h1 className='lg:text-5xl text-3xl xl:px-20 lg:px-10 px-3'>Poster Kami</h1>
      <div className='flex lg:justify-center justify-start lg:gap-x-[70px] gap-x-[30px] items-center h-[420px] mt-[88.29px] overflow-auto'>
        <img src={szA4KPondasiTerkuat} alt="" className='h-full' />
        <img src={szA4TidakMungkinKecewa} alt="" className='h-full' />
        <img src={szA4PondasiTerkuat} alt="" className='h-full' />
      </div>
      <div className='flex lg:justify-center justify-start lg:gap-x-[70px] gap-x-[30px] items-center h-[280px] mt-[88.29px] overflow-auto'>
        <img src={sz20x30HatiYangIkhlas} alt="" className='h-full' />
        <img src={sz20x30AllahMengampuniSemuaDosa} alt="" className='h-full' />
        <img src={sz20x30Mengenalmu} alt="" className='h-full' />
      </div>
    </section>
  )
}