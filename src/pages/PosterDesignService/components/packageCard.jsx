/* eslint-disable react/prop-types */
export default function PackageCard({ title = 'REGULER', revision, minDaysWork, maxDaysWork, price }) {

  return (
    <div className={`lg:w-[145px] w-full p-5 rounded-md text-center ${title.toUpperCase() === 'REGULER' ? ' bg-brown-100' :
      title.toUpperCase() === 'PREMIUM' ? 'text-white bg-brown-400' :
        title.toUpperCase() === 'ELITE' && 'text-brown-300 bg-emerald-950'
      }`}>
      <h2 className="text-inherit">{title}</h2>
      <div className="mt-[89px] text-inherit">Layanan:</div>
      <ul className="text-inherit mt-3">
        <li className="text-inherit">Revisi {revision}</li>
        <li className="text-inherit">Minimal Pengerjaan {minDaysWork} maksimal {maxDaysWork}</li>
      </ul>
      <div className="font-bold mt-6 text-inherit">Rp. {price}</div>
    </div>
  )

}