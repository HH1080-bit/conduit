import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { useRef } from "react";

import './slider.css'

const Slider = () => {
    const containerRef = useRef(null);

    const handleScroll = (scrollOffset) => {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }

    return (
        <div>
          <ul className="app-list" ref={containerRef}>
            <li>Global Feed</li>
            <li>For You</li>
            <li>Webdesign</li>
            <li>UI/UX</li>
            <li>Mobile App</li>
            <li>Mobile App Design</li>
            <li>Ux Laws</li>
            <li>Ui Laws</li>
            <li>Front-End</li>
            <li>Back-End</li>
            <BiChevronLeft size={32} onClick={() => handleScroll(-50)} className="arrow-left"/>
            <BiChevronRight size={32}  onClick={() => handleScroll(50)} className="arrow-right"/>
          </ul>


            
        </div>
    )
}

export default Slider