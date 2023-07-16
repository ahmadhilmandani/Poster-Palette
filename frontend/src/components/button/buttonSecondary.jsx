/* eslint-disable react/prop-types */
export default function ButtonSecondary({children, wSize = 'full', hSize = 'fit', tSize = 'base'}) {
  return (
    <button className={`flex gap-2 w-${wSize} h-${hSize} justify-center items-center rounded-md border border-emerald-950 px-10 py-2 font-semibold text-${tSize} text-emerald-950`}>
      {children}
    </button>
  )
}