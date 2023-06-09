import React from 'react'
import styles from '../../styles/hosts.module.css'
import { Link , NavLink, Outlet} from 'react-router-dom'

export default function () {
  return (
    <div className={styles['host-profile']}>
        <div className={styles['host-nav']}>
            <ul>
                <NavLink to='/host/dashboard' ><li>dashboard</li></NavLink>
                <NavLink to='/host/dashboard/income' ><li>income</li></NavLink>
                <NavLink to='/host/dashboard/host-vans' ><li>vans</li></NavLink>
                <NavLink to='/host/dashboard/reviews' ><li>reviews</li></NavLink>
            </ul>
        </div>
        {/* <div className="scroll"> */}
        <Outlet/>
        {/* </div> */}
    </div>
  )
}




