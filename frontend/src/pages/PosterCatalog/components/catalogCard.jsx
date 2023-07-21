/* eslint-disable react/prop-types */

import ButtonPrimary from "../../../components/button/buttonPrimary";

export default function CatalogCard({ posterImg, sold, titlePoster, left }) {
  return (
    <div className={`bg-brown-100 rounded w-full overflow-hidden`}>
      <div className={`w-full aspect-[8.5/10] bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${posterImg})` }} loading="lazy">
      </div>
      <h2 className="text-emerald-950 line-clamp-2 p-3 pb-0">{titlePoster}</h2>
      <div className="mt-2 px-3">
        <div className="text-brown-400">
          Tersisa : {left} buah
        </div>
        <div className="mt-1 text-brown-400">
          Terjual : {sold} buah
        </div>
      </div>
      <div className="px-5 py-5 mt-5 mx-auto">
        <ButtonPrimary>
          Beli Sekarang
        </ButtonPrimary>
      </div>
    </div>
  )

}