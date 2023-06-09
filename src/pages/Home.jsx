import React from 'react'
import styles from '../styles/home.module.css'
import { Link , NavLink} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Home() {
  return (
    <div className='home'>
        <section className={styles.bannerImg}>
            <LazyLoadImage effect="blur" src={require('../images/4.jpg')} alt='banner-img' width={'100%'} />
        </section>
        <div className={styles.desc}>
          {/* 5,7,9 */}
              <p>Introducing<span> "WanderWheels" </span>your ultimate destination for unforgettable vacation van rentals!</p>

              <p>At WanderWheels, we understand the thrill of exploring new horizons, embarking on road trips, and creating cherished memories with loved ones. We specialize in providing top-quality, comfortable, and fully-equipped vans that serve as your home on wheels during your dream vacation.</p>

              <p>With an extensive fleet of well-maintained vans, we offer a range of options to cater to your specific needs and preferences. Whether you're planning a solo adventure, a romantic getaway, or a family vacation, our diverse selection of vans ensures that you'll find the perfect match. From spacious and luxurious models to compact and budget-friendly options, we have something for everyone.</p>
        </div>
        <section className={styles.explore}>
            <span>Your destination is ready.</span>
            <span>Your van is waiting</span>
            <Link to='explore'><button>explore our vans</button></Link>
        </section>
    </div>
  )
}
