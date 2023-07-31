/* eslint-disable react/prop-types */
import roundedRectangle from "../../assets/rounded-rectangle.png"


export default function PageBanner({ h1, children }) {
  return (
    <header className="bg-brown-100 w-full h-[316px] mt-20 flex flex-col items-center justify-center relative">
      <h1 className="relative z-10">{h1}</h1>
      <p className="text-brown-400 mt-4 max-w-[800px] text-center relative z-10 px-3">{children}
      </p>
      <img src={roundedRectangle} alt="" className="absolute top-0 left-0 h-1/3 md:h-3/4" />
      <img src={roundedRectangle} alt="" className="absolute right-0 bottom-0 rotate-180 h-1/3 md:h-3/4" />
    </header>
  )
}