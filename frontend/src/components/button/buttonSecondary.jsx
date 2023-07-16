/* eslint-disable react/prop-types */
export default function ButtonSecondary({children, wSize = '100%'}) {
  return (
    <button className={`flex gap-2 w-[${wSize}] justify-center items-center rounded-md border border-emerald-950 px-10 py-2 font-semibold text-emerald-950`}>
      {children}
    </button>
  )

}