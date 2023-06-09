import React,{useContext} from 'react'
import styles from '../../styles/hostdashboard.module.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Vanitemdashboard from '../../components/Vanitemdashboard';
import Unlistmodal from '../../components/Unlistmodal';
import  {DataContext} from  '../../DataContext'
import Listmodal from '../../components/Listmodal';
export default function () {
const {showModal , setShowModal , showListVanModal , setShowListVanModal} = useContext(DataContext)
  return (
    <>
    {showModal && (<Unlistmodal/>)}
    {showListVanModal && (<Listmodal/>)}
    <div>
    <div className={styles["host-info-span"]}>
            <h1>welcome</h1>
            <div className={styles["income"]}>
            <span>Income in the last <Link>30 days</Link></span>
            <Link to='/host/dashboard/income'><span>Details</span></Link>
            </div>
            <span className={styles['income-in-fig']}>$2,260</span>
    </div>
        <div className={styles['review']}>
            <span>Review score <span>5/5</span></span>
            <Link to='/host/dashboard/reviews'><span>Details</span></Link>
        </div>
        <div className={styles["host-van-list"]}>
            <div className={styles['listed-vans-functionality']}>
                <span>Your listed vans</span>
                <div className={styles["listed-van-options"]}>
                    <button onClick={()=>setShowListVanModal((showListVanModal)=> true)}>List Van</button>
                    <button>View all</button>
                </div>
            </div>
            <div className={styles['van-list']}>
                <Vanitemdashboard/>
                <Vanitemdashboard/>
                <Vanitemdashboard/>
                <Vanitemdashboard/>
                <Vanitemdashboard/>
                <Vanitemdashboard/> 
            </div>
        </div>
    </div>
   </>
  )
}


