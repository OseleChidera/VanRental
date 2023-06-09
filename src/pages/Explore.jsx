import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import styles from '../styles/explore.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Explore() {
  return (
    <>
    <nav className={styles['explore-nav']}>
        <NavLink to='/'><button>simple</button></NavLink>
        <NavLink to='/'><button>luxury</button></NavLink>
        <NavLink to='/'><button>rugged</button></NavLink>
        <NavLink to='/'>clear filter</NavLink>
    </nav>
    
    <div className={styles['explore']}>
        <h2 >Explore your options</h2>
        
        <section className={styles["van-list"]}>
            <NavLink to='1'><Vancomponent/></NavLink>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
            <Vancomponent/>
        </section>
    </div>
    </>
  )
}


 function Vancomponent() {
  return (
    <div className={styles['van']}>
        {/* <div className={styles["van-image-div"]}> */}
            <LazyLoadImage effect="blur" src={require('../images/9.jpg')} alt='van-pic' height='70%' width='100%' />
        {/* </div> */}
        <div className={styles["van-info"]}>
            <div className={styles["description"]}>
                <span className={styles["van-name"]}>modest explorer</span>
                <span className={styles["van-price-per-day"]}>$60 <br/>/day</span>
            </div>
            <span className={styles["van-type"]}>simple</span>
                
        </div>
    </div>
  )
}
