import AuroraBack from "@/components/AuroraBackground"
import Dots from "@/components/Dots"
import { Gemini } from "@/components/Gemini"
import { Gradient } from "@/components/Gradient"
import { Grid1 } from "@/components/Grid1"
import { Grid2 } from "@/components/Grid2"
import { Grid3 } from "@/components/Grid3"
import Rays from "@/components/Rays"
import { Typer } from "@/components/Typer"
import { Boxes } from "@/components/ui/background-boxes"
import { TextRevealCard } from "@/components/ui/text-reveal-card"

import { Vortex } from "@/components/ui/vortex"
function page() {
  const card = {
    text:"You know the business",
    revealText:"I know the chemistry ",
    className:" text-lg text-orange-500",
   }

  

  return (
    <div className="bg-black min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <AuroraBack/>
     <Rays/>
     {/* <Boxes/> */}
     <Dots/>
     <Gemini/>
     <Gradient/>
     <Grid1/>
     <Grid2/>
     <Grid3/>
     <Vortex/>
    <div className=" mt-40">
    <Typer/>
    <div className=" item-center justify-center mb-70 ">
    <TextRevealCard {...card}/>
    </div>
    </div>
    </div>
   
  )
}

export default page