import React from 'react';
import styles from './CourseList.module.scss';

const CourseCard = ({ course }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={course.image} alt={course.title} />
      </div>
      
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        
        <div className={styles.priceGroup}>
          <span className={styles.price}>{course.price}</span>
        </div>
        
        <ul className={styles.cardFeatures}>
          {course.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.featureIcon}>
                <path d="M4 2L9 6L4 10V2Z" fill="#15CCA3" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={styles.cardFooter}>
          <button className={styles.enrollBtn}>
            Xem thêm
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path 
                d="M3.5 5.25L7 8.75L10.5 5.25" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
