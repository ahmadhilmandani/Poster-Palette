import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full shadow-xl h-16 py-3 px-3 lg:px-20 flex justify-between items-center">
      <img src={logo} alt="" className="w-[120px]" />
      <div className="flex justify-between gap-20 text-sm">
        <button>Home</button>
        <button>Katalog poster kami</button>
        <button>Pesan Desain Poster</button>
        <button>Tentang Kami</button>
      </div>
      <button className="text-sm text-center px-10 py-2 bg-emerald-950 text-brown-300 font-medium rounded-md">Login</button>
    </nav>
  )
}