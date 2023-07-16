/* eslint-disable react/prop-types */
export default function ButtonPrimary({children,  wSize = 'full', hSize = 'fit', tSize = 'base'}) {
  return (
    <button className={`flex gap-2 w-${wSize} h-${hSize} justify-center items-center rounded-md bg-emerald-950 px-10 py-2 font-semibold text-${tSize} text-brown-300 hover:opacity-90`}>
      {children}
    </button>
  )

}