import React from 'react';
import styles from './Curriculum.module.scss';

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}>
      <button className={styles.accordionHeader} onClick={onToggle}>
        <div className={styles.accordionLeft}>
          <span className={styles.accordionTitle}>{item.title}</span>
        </div>
        <div className={styles.accordionRight}>
          <span className={styles.accordionDuration}>{item.duration}</span>
          <div className={styles.accordionIcon}>
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
              </svg>
            )}
          </div>
        </div>
      </button>

      {item.topics && item.topics.length > 0 && (
        <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}>
          <div className={styles.accordionBody}>
            <ul className={styles.lessonList}>
              {item.topics.map((topic, idx) => (
                <li key={idx} className={styles.lessonItem}>
                  <span className={styles.lessonText}>- {topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
