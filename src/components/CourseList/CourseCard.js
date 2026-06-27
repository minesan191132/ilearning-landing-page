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
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon}>
                <path d="M10.5 4.60108C11.8333 5.37088 11.8333 7.29538 10.5 8.06518L3 12.3953C1.66666 13.1651 -6.49976e-07 12.2029 -5.82678e-07 10.6633L-2.04126e-07 2.003C-1.36828e-07 0.463398 1.66667 -0.498849 3 0.270952L10.5 4.60108Z" fill="#15CCA3" />
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
