import React, { useState } from 'react'
import styles from './Header.module.css';
import Card from './Card';


const Header = ({instructor , course}) => {
    const [navItem , setNevItem] = useState('ABOUT')
    const handleClick = (e) => {
        e.preventDefault()
        setNevItem(e.target.innerText)
        
    }
  return (
    <header>
        <div className={styles.top}>
            <div className={styles.headerImage}>
                <img alt='header-image' src={course.course_poster} />
            </div>
            <div className={styles.title}>
                <p>{instructor.name}</p>
                <h1>{course.title}</h1>
            </div>
            <div className={styles.card}>
                <Card course = {course}/>
            </div>
        </div>
        <div className={styles.navbar}>
            <ul>
                <li onClick={handleClick} className={navItem === 'ABOUT' ? styles.active : styles.inactive}>About</li>
                <li onClick={handleClick} className={navItem === 'INSTRUCTOR' ? styles.active : styles.inactive}>instructor</li>
                <li onClick={handleClick} className={navItem === 'REVIE' ? styles.active : styles.inactive}>review</li>
            </ul>
        </div>

         
    </header>
  )
}

export default Header