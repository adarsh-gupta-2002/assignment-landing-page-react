import React from 'react'
import styles from './Icontext.module.css'

const Icontext = ({icon , text}) => {
  
  return (
    <div className = {styles.container}>
        <span>{icon}</span>
        <p>{text}</p>
    </div>
  )
}

export default Icontext