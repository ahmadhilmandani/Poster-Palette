/* eslint-disable react/prop-types */


import PageBanner from "../../components/pageBanner/pageBanner";
import CatalogCard from "./components/catalogCard";
import A401 from '../../assets/poster/A401.png'
import A402 from '../../assets/poster/A402.png'
import A403 from '../../assets/poster/A403.png'
import P20x3001 from '../../assets/poster/20x3001.png'
import P20x3002 from '../../assets/poster/20x3002.png'
import P20x3003 from '../../assets/poster/20x3003.png'
import { Link } from 'react-router-dom'

export default function PosterCatalog() {
  return (
    <>
      <PageBanner h1={"Katalog Poster Kami!"}>
        Lengkapi ruang Anda dengan sentuhan unik dan inspiratif, Lalu Temukan keindahan dalam beragam karya seni dengan katalog poster kami.
      </PageBanner>
      <main className="w-full min-h-screen bg-brown-50">
        <div className="mt-16 flex flex-wrap gap-10 justify-center items-center">
          <Link to={'/catalog/1'} className="hover:opacity-80">
            <div className="w-[400px] rounded mt-2">
              <CatalogCard posterImg={A401} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
          <Link to={'/catalog/1'}>
            <div className="w-[400px] rounded mt-2">
              <CatalogCard posterImg={A402} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
          <Link to={'/catalog/1'}>
            <div className="w-[400px] rounded mt-2">
              <CatalogCard posterImg={A403} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap gap-10 justify-center items-center">
          <Link to={'/catalog/1'}>
            <div className="w-[280px] rounded mt-2">
              <CatalogCard posterImg={P20x3001} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
          <Link to={'/catalog/1'}>
            <div className="w-[280px] rounded mt-2">
              <CatalogCard posterImg={P20x3002} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
          <Link to={'/catalog/1'}>
            <div className="w-[280px] rounded mt-2">
              <CatalogCard posterImg={P20x3003} left={20} sold={100} titlePoster={"Rumah Bukan Perkara Letak Geografis"} />
            </div>
          </Link>
        </div>
      </main>
    </>
  )

}