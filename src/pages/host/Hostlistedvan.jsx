import React ,{useContext}from 'react'
import { Link , NavLink} from 'react-router-dom'
import styles from '../../styles/hostlistedvan.module.css'
import { DataContext } from '../../DataContext';
import Unlistmodal from '../../components/Unlistmodal';

export default function Van() {
   const {showModal , setShowModal} = useContext(DataContext)

  return (
    <>
    {showModal && (<Unlistmodal/>)}
    <div className={styles.van}>
        <nav className={styles['van-nav']}>
            <Link to='/host/dashboard' className={styles['back']}>
                <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-left.png" alt="long-arrow-left"/>
            </Link>
        </nav>
        <div className={styles["van-item"]}>
            <div className={styles["van-item-image-div"]}>
                <img src={require('../../images/9.jpg')}  alt="van-item-image" className={styles['van-img']} />
            </div>
            <div className={styles["van-type"]}><span>special</span></div>
            <div className={styles["van-name"]}><span>modest explorer</span></div>
            <div className={styles["van-price-per-day"]}>
                <span>$60</span>
                <span className={styles["van-price-duration"]}>/day</span>
            </div>
            <div className={styles["van-descriotion"]} style={{marginBottom:'2rem'}}>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil, corporis alias molestiae exercitationem rerum illo minima consequuntur, autem voluptates consectetur? Soluta voluptatem natus iusto tempore deleniti. Laudantium, voluptates quaerat?
                  Ex error voluptates aut possimus, nihil libero suscipit voluptas neque officia ad repellat est doloremque repellendus necessitatibus mollitia voluptate delectus modi a, dolor sunt. Tempore, ducimus nisi? Laboriosam, iure nihil.
                  Quisquam neque vitae hic. Possimus, asperiores facilis ipsum enim fugiat iusto quos optio molestiae nulla, sequi provident voluptates modi corrupti inventore officiis temporibus natus nemo voluptatibus eveniet aspernatur maiores! Ex?
                  Maxime sunt numquam dicta nostrum molestias repudiandae doloribus cumque quo? Optio minus molestiae velit facilis provident, debitis est, quidem eveniet explicabo iusto sunt obcaecati similique ab, delectus harum temporibus! Porro?
                  Odio ipsam vitae et, quam sit facilis accusamus corporis? Eligendi incidunt, quam temporibus at, labore delectus earum facilis eaque ut repellendus consequatur quasi doloremque inventore blanditiis suscipit cupiditate quia autem.
                  Nisi vel harum molestias numquam consequuntur voluptatum a et. Repudiandae vel a molestias consectetur ad nulla ducimus, ab corrupti. Nisi quae expedita molestiae sit possimus tenetur eveniet vero mollitia quidem.
                  Aut, eum provident tenetur temporibus vel labore et suscipit voluptatibus aperiam, numquam blanditiis necessitatibus cupiditate quam debitis itaque earum. At aspernatur ex dignissimos provident assumenda, nulla quo excepturi laudantium. Qui!
              </p>
            </div>
            <button className={styles['unlist']} onClick={()=> setShowModal(showModal=> true)}>unlist</button>
        </div>
    </div>
    </>
  )
}
