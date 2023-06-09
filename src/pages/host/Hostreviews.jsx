import React from 'react'
import styles from '../../styles/hostreviews.module.css'
import { Link } from 'react-router-dom'
import Commentcomponent from '../../components/Commentcomponent'
export default function Hostreviews() {
  return (
    <div className={styles['reviews']}>
      <div className={styles['review']}>
        <span>
          <h1>your reviews</h1> 
          <span>last</span>
          <Link to='/host/dashboard/reviews'><span>30 days</span></Link>
        </span>
        </div>
        <>
        <h3 className={styles['review-count']}>Reviews(<b>2</b>)</h3>
        <div className={styles['review-list-section']}>
          <Commentcomponent/>
          <Commentcomponent/>
          <Commentcomponent/>
          <Commentcomponent/>
        </div>
        </>
    </div>
  )
}


// function ReviewComponent({}) {
//   return (
//     <>
//     <div className={styles['customer-review']}>
//         <h2>5 / 5</h2>
//         <div>
//           <h3 className={styles["user"]}>elliot dickson</h3>
//           <span className={styles["review-date"]}>December 1, 2023</span>
//         </div>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem, velit ducimus tempora temporibus numquam dolorem odit eos quam voluptatum quos iusto dolore tempore consequuntur atque ratione vel assumenda perspiciatis.
//         </p>
        
//     </div>
//       <hr />
//     </>
//   )
// }
