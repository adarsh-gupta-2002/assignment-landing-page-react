import React from 'react'
import styles from './ProfileCard.module.css'


const ProfileCard = ({image ,name , jobTitle}) => {
    return (
        <div className={styles.profileCard}>
          <img src={image} alt={`${name}'s profile`} />
          <div>
            <h3>{name}</h3>
            <p>{jobTitle}</p>
          </div>
        </div>
      );
}

export default ProfileCard