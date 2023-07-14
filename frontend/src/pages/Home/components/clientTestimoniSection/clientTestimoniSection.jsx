import TestimoniCard from "./components/testimoniCard";
import avatar1 from "../../../../assets/testimoni-card/avatar-1.png"
import avatar2 from "../../../../assets/testimoni-card/avatar-2.png"
import avatar3 from "../../../../assets/testimoni-card/avatar-3.png"
import avatar4 from "../../../../assets/testimoni-card/avatar-4.png"
import avatar5 from "../../../../assets/testimoni-card/avatar-5.png"
import avatar6 from "../../../../assets/testimoni-card/avatar-6.png"
import avatar7 from "../../../../assets/testimoni-card/avatar-7.png"
import avatar8 from "../../../../assets/testimoni-card/avatar-8.png"


export default function ClientTestimoniSection() {
  return (
    <section className="xl:px-20 lg:px-10 px-3 mt-24">
      <h1 className="text-5xl">Testimoni Pembeli <span className="text-rose-600">❤</span></h1>
      <div className="flex flex-wrap justify-center gap-4 mt-[54px]">
        <div>
          <TestimoniCard avatar={avatar1} avatarName={'John Doe'}>
            Saya sangat senang dengan kualitas poster yang saya terima dari percetakan ini. Mereka dicetak dengan sangat baik dan terlihat luar biasa. Saya pasti akan menggunakan layanan mereka lagi di masa depan.
          </TestimoniCard>
          <TestimoniCard avatar={avatar2} avatarName={'John Doe'}>
            Ngeriiiii! puas banget sama kualitas posternya! Warnanya tajem! Detail nya juga dapet! Harga segini mah murah banget kalau kualitasnya juara kayak gini! Semoga kedepannya kualitasnya tetap bagus kayak gini bahkan kalau bisa meningkat, tapi jangan harganya yaaa yang meningkat, kalau bisa turun wkwkwkwk. Recomended banget pokoknya!
          </TestimoniCard>
          <TestimoniCard avatar={avatar3} avatarName={'John Doe'}>
            Saya sangat senang dengan poster yang saya pesan dari percetakan ini. Mereka terlihat sangat bagus di dinding saya
          </TestimoniCard>
        </div>
        <div>
          <TestimoniCard avatar={avatar4} avatarName={'John Doe'}>
            Ngeriiiii! puas banget sama kualitas posternya! Warnanya tajem! Detail nya juga dapet! Harga segini mah murah banget kalau kualitasnya juara kayak gini! Semoga kedepannya kualitasnya tetap bagus kayak gini bahkan kalau bisa meningkat, tapi jangan harganya yaaa yang meningkat, kalau bisa turun wkwkwkwk. Recomended banget pokoknya!
          </TestimoniCard>
          <TestimoniCard avatar={avatar5} avatarName={'John Doe'}>
            Posternya bagus banget pak parah. Aku kustom warna poster yang tentang Kamu itu rumah jadi warna Biru muda gitu, dan hasilnya cakeppp sama persis sama yang aku request.
          </TestimoniCard>
          <TestimoniCard avatar={avatar6} avatarName={'John Doe'}>
            Ngeriiiii! puas banget sama kualitas posternya! Warnanya tajem! Detail nya juga dapet! Harga segini mah murah banget kalau kualitasnya juara kayak gini! Semoga kedepannya kualitasnya tetap bagus kayak gini bahkan kalau bisa meningkat, tapi jangan harganya yaaa yang meningkat, kalau bisa turun wkwkwkwk. Recomended banget pokoknya!
          </TestimoniCard>
        </div>
        <div>
          <TestimoniCard avatar={avatar7} avatarName={'John Doe'}>
            Saya sangat senang dengan kualitas poster yang saya terima dari percetakan ini. Mereka dicetak dengan sangat baik dan terlihat luar biasa. Saya pasti akan menggunakan layanan mereka lagi di masa depan.
          </TestimoniCard>
          <TestimoniCard avatar={avatar8} avatarName={'John Doe'}>
            Saya sangat senang dengan kualitas poster yang saya terima dari percetakan ini. Mereka dicetak dengan sangat baik dan terlihat luar biasa. Saya pasti akan menggunakan layanan mereka lagi di masa depan.
          </TestimoniCard>
        </div>
      </div>
    </section>
  )
}