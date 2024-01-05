import React from 'react'
import Icontext from './Icontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faMessage } from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.css'


const Card = ({course}) => {
  return (
    <div className={styles.card}>
        <div>
            <h3>Course fees</h3>
            <h1>₹{course.fee.amount}</h1>
        </div>

        <div className={styles.content}>
        <h3>What's included:</h3>
        <div>
          <Icontext icon = {<FontAwesomeIcon icon = {faCirclePlay} />} text = {`${course.inclusions.on_demand_videos} on demant videos`}/>
          <Icontext icon = {<FontAwesomeIcon icon = {faCirclePlay} />} text = {`${course.inclusions.live_qa_sessions ? "Active" :"No" } Q/A sessions`}/>
          <Icontext icon = {<FontAwesomeIcon icon = {faMessage} />} text = {`${course.inclusions.whatsapp_community ? "Interactive" : ""} Whatsapp Community`}/>
        </div>
 
        </div>

        <div>
            <button>Register today</button>
        </div>
        
    </div>
  )
}

export default Card