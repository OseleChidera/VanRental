import React from 'react'
import Vanitem from '../../components/Vanitem'
import styles from '../../styles/hostvanslist.module.css'
import { Link , NavLink} from 'react-router-dom'

export default function Hostvanslist() {
  return (
    <div className={styles['host-vans']}>
    <h1>Your listed vans</h1>
      <div className={styles['van-list']}>
        <Vanitem/>
        <Vanitem/>
        <Vanitem/>
        <Vanitem/>
        <Vanitem/>
        <Vanitem/> 
      </div>    
    </div>
  )
}
