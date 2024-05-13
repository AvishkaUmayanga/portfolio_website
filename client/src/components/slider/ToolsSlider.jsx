import React from 'react'
import Slider from "react-slick";
import { toolsData } from '../../data/toolsData';


function ToolsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
    <div className="h-16 max-sm:h-12 dark:bg-slate-900 bg-slate-100">
      <Slider {...settings}>
        {toolsData.map((tool,index)=>(
        <div key={index} className='w-16 h-16 max-sm:w-12 max-sm:h-12'>
          <img src={tool.toolLogo} alt='tool' className='object-contain w-16 h-16 max-sm:w-12 max-sm:h-12'/>
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default ToolsSlider