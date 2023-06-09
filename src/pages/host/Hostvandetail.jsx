import React from 'react'
import styles from '../../styles/hostvanlistdetail.module.css'
import { Link , NavLink, Outlet} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Hostvandetails() {
  return (
    <div className={styles['host-van-detail']}>
        <nav className={styles['host-van-nav']}>
            <NavLink to='/host/dashboard/vans' className={styles['back']}>
                <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-left.png" alt="long-arrow-left" />
            </NavLink>
        </nav>
        <div className={styles["info"]}>
          <div className={styles['van-detail']}>
            <div className={styles["left"]}>
              <img src={require('../../images/3.jpg')} alt="" width={150} height={150}/>
            </div>
              <div className={styles["right"]}>
              <span className={styles['type']}>simple</span>
              <span className={styles['name']}>Modest Explorer</span>
              <span className={styles['price']}>$60/day</span>
            </div>
          </div>
          <nav className={styles['host-van-nav']}>
              <ul>
                  <NavLink to='/host/dashboard/host-vans/1' ><li>details</li></NavLink>
                  <NavLink to='/host/dashboard/host-vans/1/pricing' ><li>pricing</li></NavLink>
                  <NavLink to='/host/dashboard/host-vans/1/photos' ><li>photos</li></NavLink>
              </ul>
          </nav>
          <Outlet/>
        </div>
    </div>
  )
}
