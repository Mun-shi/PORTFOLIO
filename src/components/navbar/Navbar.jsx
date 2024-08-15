import Sidebar from "../sidebar/Sidebar"
import "./Navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
      <div className="wrapper">
         <motion.span 
         initial={{opacity:0, scale:0.5}} 
         animate={{opacity:1, scale:1}} 
         transition={{duration: 0.5}}>Munshi</motion.span>
         <div className="social">
            <a href="https://www.instagram.com/_munshi___?igsh=MXc4MGlwMWYzMXFtNg=="><img src="/instagram.png" alt="" /></a>
            <a href="https://github.com/Mun-shi"><img src="/github.webp" alt="" /></a>
            <a href="https://leetcode.com/u/mun_shi/"><img src="/leetcode.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/muhammed-munshid"><img src="/linkedin.webp" alt="" /></a>
         </div>
        </div>  
    </div>
  )
}

export default Navbar
