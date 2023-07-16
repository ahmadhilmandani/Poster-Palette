/* eslint-disable react/prop-types */

export default function InputNumber({ leftItem, quantity, setQuantity }) {


  return (
    <>
      <div className="flex items-center">
        <button className="w-10 border border-slate-300 py-1" onClick={() => { setQuantity(quantity - 1) }}>-</button>
        <input
          type="number"
          className="custom-input outline-none py-1 w-20 text-center border border-slate-300 bg-transparent"
          value={quantity}
        />
        <button className="w-10 border border-slate-300 py-1" onClick={() => { setQuantity(quantity + 1) }}>+</button>
        <div className="text-slate-300 ml-5">tersisa {leftItem}</div>
      </div>
    </>
  )
}