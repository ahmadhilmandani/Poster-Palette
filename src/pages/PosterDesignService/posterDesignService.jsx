import { useState } from "react";
import InputRadio from "../../components/input/InputRadio";
import PageBanner from "../../components/pageBanner/pageBanner";
import PackageCard from "./components/packageCard";
import StepToOrder from "./components/stepToOrder";
import { IconNotes, IconPencil, IconShoppingCartPlus, IconX } from "@tabler/icons-react";
import ButtonPrimary from "../../components/button/buttonPrimary";
import ButtonSecondary from "../../components/button/buttonSecondary";


export default function PosterDesignService() {
  const [choosed, setChoosed] = useState(null)
  const [colorChoosed2, setColorChoosed2] = useState(null)
  const [noteOpen, setNoteOpen] = useState(false)

  return (
    <>


      <div className="w-full min-h-screen">
        <PageBanner h1={"Jasa Desain Poster"} >
          Anda Memiliki Poster Impian yang ingin diwujudkan namun bingung mencari jasa desainnya?
          Kami menyediakan layanan Jasa Desain Poster sesuai dengan permintaan anda!
        </PageBanner>

        <div className="lg:flex gap-20 justify-center xl:px-20 lg:px-10 px-3 lg:mt-16 mt-10">

          <div className={`${noteOpen === true ? "block fixed z-[99] top-0 left-0 right-0 bottom-0" : "hidden lg:block flex-1 sticky top-32 left-0 h-fit"} bg-brown-100 rounded-md p-5`}>
            {
              noteOpen === true &&
              (
                <div className="flex justify-end" onClick={()=>{setNoteOpen(false)}}>
                  <IconX />
                </div>
              )
            }
            <StepToOrder />
          </div>

          <div className={`lg:hidden block fixed bottom-5 left-5 rounded-full p-3 z-50 bg-brown-200 shadow-xl`}
            onClick={() => {
              setNoteOpen(true)
            }}
          >
            <IconNotes />
          </div>

          <div className="bg-white rounded-md shadow-lg max-w-[560px] w-full mx-auto">
            <div className="p-10">
              <h2>Pemesanan Jasa Desain Poster</h2>
              <div className="mt-10">
                <div>1. Pilih Paket</div>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <PackageCard price={"150.000"} />
                  <PackageCard price={"150.000"} title={"PREMIUM"} />
                  <PackageCard price={"150.000"} title={"ELITE"} />
                </div>
              </div>
              <div className="mt-10">
                <div>
                  2. Ukuran
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <InputRadio inputId={'a4'} InputName={'size'} inputVal={'a4'} choosed={choosed} setChoosed={setChoosed} >
                    A4
                  </InputRadio>
                  <InputRadio inputId={'a3'} InputName={'size'} inputVal={'a3'} choosed={choosed} setChoosed={setChoosed} >
                    A3
                  </InputRadio>
                  <InputRadio inputId={'20x30'} InputName={'size'} inputVal={'20x30'} choosed={choosed} setChoosed={setChoosed} >
                    20x30
                  </InputRadio>
                  <InputRadio inputId={'10x15'} InputName={'size'} inputVal={'10x15'} choosed={choosed} setChoosed={setChoosed} >
                    10x15
                  </InputRadio>
                </div>
              </div>
              <div className="mt-10">
                <div>
                  3. Warna poster
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div>Background color</div>
                    <div className="w-5 aspect-square rounded-full border-2 bg-yellow-50"></div>
                    <div className="text-slate-300">#1234ff</div>
                    <IconPencil size={16} stroke={1.5} className="hover:cursor-pointer" />
                  </div>
                  <div className="flex flex-wrap items-center gap-[10px] mt-[10px]">
                    <div>Primary color</div>
                    <div className="w-5 aspect-square rounded-full border-2 bg-yellow-500"></div>
                    <div className="text-slate-300">#1234ff</div>
                    <IconPencil size={16} stroke={1.5} className="hover:cursor-pointer" />
                  </div>
                  <div className="flex flex-wrap items-center gap-[10px] mt-[10px]">
                    <div>Secondary color</div>
                    <div className="w-5 aspect-square rounded-full border-2 bg-violet-400"></div>
                    <div className="text-slate-300">#1234ff</div>
                    <IconPencil size={16} stroke={1.5} className="hover:cursor-pointer" />
                  </div>
                  <div className="flex flex-wrap items-center gap-[10px] mt-[10px]">
                    <div>Secondary color</div>
                    <div className="w-5 aspect-square rounded-full border-2 bg-white"></div>
                    <div className="text-slate-300">#1234ff</div>
                    <IconPencil size={16} stroke={1.5} className="hover:cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div>
                  4. Deskripsi poster
                </div>
                <input type="textarea" className="mt-2 w-full border outline-none border-slate-300 px-3 py-2" />
                <div className="mt-3">
                  Contoh poster dari deskripsi yang diberikan
                </div>
                <input type="file" className="mt-2 border outline-none border-slate-300 px-3 py-2" />
              </div>
              <div className="mt-10">
                <div>
                  5. Warna Frame
                </div>
                <div className="mt-5 flex flex-wrap gap-4">
                  <InputRadio inputId={'hitam-warna'} InputName={'color'} inputVal={'hitam-warna'} choosed={colorChoosed2} setChoosed={setColorChoosed2} >
                    <div className="w-4 aspect-square rounded-full bg-[#2B2730]"></div>
                    Hitam
                  </InputRadio>
                  <InputRadio inputId={'cokelat-tua-warna'} InputName={'color'} inputVal={'cokelat-tua-warna'} choosed={colorChoosed2} setChoosed={setColorChoosed2} >
                    <div className="w-4 aspect-square rounded-full bg-[#C38154]"></div>
                    <div className="text-center">
                      Cokelat Tua
                    </div>
                  </InputRadio>
                  <InputRadio inputId={'cokelat-warna'} InputName={'color'} inputVal={'cokelat-warna'} choosed={colorChoosed2} setChoosed={setColorChoosed2} >
                    <div className="w-4 aspect-square rounded-full bg-[#BFA28A]"></div>
                    <div className="text-center">
                      Cokelat
                    </div>
                  </InputRadio>
                  <InputRadio inputId={'cokelat-muda-warna'} InputName={'color'} inputVal={'cokelat-muda-warna'} choosed={colorChoosed2} setChoosed={setColorChoosed2} >
                    <div className="w-4 aspect-square rounded-full bg-[#F3DEBA]"></div>
                    <div className="text-center">
                      Cokelat Muda
                    </div>
                  </InputRadio>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-[5px] p-3">
              <div className="flexx-1">
                <ButtonSecondary >
                  <IconShoppingCartPlus color={"#4F5F4F"} />
                  Masukkan ke Keranjang
                </ButtonSecondary>
              </div>
              <div className="flex-1">
                <ButtonPrimary>Beli Sekarang</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}