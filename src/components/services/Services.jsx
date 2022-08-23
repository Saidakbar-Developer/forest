import './services.css'

import img from '../../images/tag (1).png'
import img1 from '../../images/tag (2).png'
import img2 from '../../images/tag (3).png'
import img3 from '../../images/tag (4).png'
import img4 from '../../images/tag (5).png'
import img5 from '../../images/tag (6).png'
import img6 from '../../images/tag (7).png'
import img7 from '../../images/tag (8).png'



const Services = () => {
  return (
    <div className='services'>
      <div className="container">
        <div className="servic">
          <div className="acer">
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className="acer">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services