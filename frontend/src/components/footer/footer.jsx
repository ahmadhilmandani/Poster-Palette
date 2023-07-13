import { IconBrandInstagram, IconBrandLinkedin, IconChevronRight } from "@tabler/icons-react"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-emerald-950 w-full h-[450px] mt-24 px-20 py-[55px]">
      <div className="flex gap-20 justify-between">
        <div>
          <img src={logo} alt="" className="brightness-0 invert w-[242.37px]" />
          <p className="text-white w-[205px] text-[20px] mt-[26px]">
            Poster Pribadi yang Mencerahkan Setiap Sudut Ruangan Anda.
          </p>
          <div className="flex gap-3 mt-[26px]">
            <Link to={'https://www.linkedin.com/in/ahmad-hilman-b52b661b7/'} className="text-white hover:border-b-0" target="_blank">
              <IconBrandLinkedin size={40} color="white" />
            </Link>
            <Link to={'https://www.instagram.com/ahmadhilmandani/'} className="text-white hover:border-b-0" target="_blank">
              <IconBrandInstagram size={40} color="white" />
            </Link>
          </div>
        </div>
        <div className="w-[300px]">
          <h2 className="text-4xl text-white">Alamat</h2>
          <p className="text-white mt-[40px] text-[20px]">
            Jl. Kejora No. 1 Perumahan Satelit Desa Pabian Kabupaten Sumenep Provinsi Jawa Timur
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-white">Layanan</h2>
          <div className="flex gap-3 mt-[40px]">
            <IconChevronRight color="white" />
            <Link to={'/1'} className="text-white border-white">Katalog Poster Kami</Link>
          </div>
          <div className="flex gap-3 mt-5">
            <IconChevronRight color="white" />
            <Link to={'/1'} className="text-white border-white">Pesan Desain poster</Link>
          </div>
          <div className="mt-20">
            <h2 className="text-4xl text-white">Kontak</h2>
            <Link to={'mailto:ahmadhilmanlagi@gmail.com'} className="text-white border-white mt-[40px] block">ahmadhilmanlagi@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}