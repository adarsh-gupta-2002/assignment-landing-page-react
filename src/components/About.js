import React from 'react'
import styles from './About.module.css'
 
const About = ({course}) => {

  return (
    <div className={styles.about} >
        <div className={styles.top}>
          <h2>About the course</h2>
          
          <div dangerouslySetInnerHTML={{ __html: course.about.html_content }} />

              
        </div>
        <div className={styles.middle}>
            <h2>What to expect from the course</h2>
            <div dangerouslySetInnerHTML={{ __html: course.what_to_expect.html_content }} />
             
        </div>
        <div className={styles.bottom}>
            <h2>Key topics covered</h2>
            <div dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }} />
             
        </div>
    </div>
  )
}

export default About