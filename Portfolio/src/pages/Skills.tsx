import { assets } from "../assets/assets"
import Skill from "../components/skills/Skills"

const Skills = () => {
  return (
    <div className="bg-black flex justify-center min-h-screen">
       <img src={assets.developer} alt="" className="max-w-[350px] -z-30 fixed bg-fixed mt-[100px] mr-[890px] "/>
      <Skill/>
      
    </div>
  )
}

export default Skills
