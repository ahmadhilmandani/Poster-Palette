/* eslint-disable react/prop-types */

export default function TestimoniCard({ children, avatar, avatarName }) {
  return (
    <div className="bg-brown-100 max-w-[360px] px-[24px] py-[24px] rounded-xl mt-4">
      <div className="flex gap-x-5 items-center">
        <img src={avatar} alt="" className="w-16 aspect-square rounded-full" />
        <h2 className="text-emerald-950">{avatarName}</h2>
      </div>
      <p className="text-brown-400 mt-4">
        {children}
      </p>
    </div>
  )
}