import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img5.png'
import img4 from '../../assets/img6.png'
import img5 from '../../assets/img7.png'
import img6 from '../../assets/img8.png'


const data = [
  {
    id: 1,
    image: img2,
    title: 'Curiosity Rover Image Gallery',
    demo: 'https://marscuriosity.vercel.app/'
  },
  {
    id: 2,
    image: img3,
    title: 'Rhyno Wheels Pvt Ltd',
    demo: 'https://rhyno-ev-v2.vercel.app/'
  },
  {
    id: 3,
    image: img4,
    title: 'IEEE VESIT Official Website',
    demo: 'https://www.ieeevesit.org/'
  },
  {
    id: 4,
    image: img5,
    title: 'My Personal Website',
    demo: 'https://prathammatkar.vercel.app/'
  },
  {
    id: 5,
    image: img6,
    title: 'Urban Farm SquaredRoot',
    demo: 'https://squaredroots.vercel.app/'
  },
  {
    id: 6,
    image: img1,
    title: 'Drone Air Gear Website',
    demo: 'https://droneairgearwebsite.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo}) => (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <a href={demo} className='projectlink' target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
              </a>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio
