import React from 'react'
import styles  from './Instructor.module.css'
import Icontext from './Icontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Instructor = ({aboutInstructor}) => {
  const columnThreshold = 300;

  const isLargeParagraph = aboutInstructor.html_content.length > columnThreshold;
  return (
    <div className={styles.instructor}>
        <h2>About the Instructor</h2>
        <div className={styles.content}>
             
          <img alt = "instructor-image" src = {aboutInstructor.instructor_image}/>
          
          <div className={`${styles["column-container"]} ${isLargeParagraph ? styles['two-columns'] : ''}` }>
              
            <div dangerouslySetInnerHTML={{ __html: aboutInstructor.html_content }} />  
          </div>
             
        </div>
        <div className={styles.social}>
            <Icontext icon = {<FontAwesomeIcon icon ={faFacebook} />} text = "Facebook" />
            <Icontext icon = {<FontAwesomeIcon icon ={faSquareXTwitter} />} text = "Twitter" />
            <Icontext icon = {<FontAwesomeIcon icon ={faYoutube} />} text = "Youtube" />
            <Icontext icon = {<FontAwesomeIcon icon ={faInstagram} />} text = "Instagram" />
        </div>
    </div>
  )
}

export default Instructor