import { IconPaint, IconPhoto } from "@tabler/icons-react";

export default function ServiceSection() {
  return (
    <section>
      <div className='bg-brown-100 w-full min-h-[366px] py-10 lg:px-20 px-3'>
        <h1 className='text-center lg:text-left'>Layanan Menarik Kami!</h1>
        <div className='mt-12 lg:flex justify-between lg:gap-x-[150px]'>
          <div className='flex flex-1 flex-wrap lg:justify-start justify-center text-center lg:text-left items-start gap-7'>
            <div className='bg-emerald-950 rounded-md p-3'>
              <IconPaint stroke={2} size={44.1} color='#D7C39C' />
            </div>
            <div>
              <h2 className='text-emerald-950'>Cocokan warna poster dengan ruangan anda</h2>
              <div className='text-brown-400 mt-5'>
                Tidak perlu bingung lagi untuk menyesuaikan warna poster dengan ruangan anda! karena anda dapat langsung merubah warna poster di web kami!
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-wrap lg:justify-start justify-center text-center lg:text-left items-start gap-7 lg:mt-0 mt-10'>
            <div className='bg-emerald-950 rounded-md p-3'>
              <IconPhoto stroke={2} size={44.1} color='#D7C39C' />
            </div>
            <div>
              <h2 className='text-emerald-950'>Kami siap menerima permintaan desain poster yang anda inginkan!</h2>
              <div className='text-brown-400 mt-5'>
                Anda dapat memesan jasa desain poster kepada kami apabila anda tidak menemukan poster anda inginkan di katalog kami!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-brown-200 w-full min-h-[126px] lg:flex items-center justify-center lg:py-0 py-4'>
        <div className='text-center flex-1'>
          <b className='block'>3+</b>
          Tahun Beroperasi
        </div>
        <div className='text-center flex-1 border-r border-l border-brown-300 lg:my-0 my-12'>
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