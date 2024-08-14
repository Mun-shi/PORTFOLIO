import "./portfolio.scss";

const items = [
    {
        id:1,
        title:"Dijkstra’s Algorithm Visualizer",
        img:"https://www.pexels.com/photo/man-fishing-on-seashore-with-dog-22708188/",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id:2,
        title:"Traffic Sign Recognition System",
        img:"https://www.pexels.com/photo/man-fishing-on-seashore-with-dog-22708188/",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id:3,
        title:"Library Management System",
        img:"https://www.pexels.com/photo/man-fishing-on-seashore-with-dog-22708188/",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
]

const Single = ({item}) =>{
    return(
        <section>
            {item.title}
        </section>
    )
}
const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
