import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id:1,
        title:"Traffic Sign Recognition System",
        img:"Traffic.jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id:2,
        title:"Dijkstra’s Algorithm Visualizer",
        img:"digis.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id:3,
        title:"Library Management System",
        img:"library.jpg",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
]

const Single = ({item}) =>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1],[-300, 300])

    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar">
            </motion.div>
        </div>
      {items.map((item) =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
