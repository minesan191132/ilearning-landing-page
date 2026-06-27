import React from 'react';
import styles from './Hero.module.scss';
import heroBanner from '../../assests/images/herobanner.png';

const Hero = () => {
    return (
        <section className={styles.hero} id="about">
            <div className={styles.container}>
                <div className={styles.bannerWrapper}>
                    <img
                        src={heroBanner}
                        alt="iLearning - Chương trình học lập trình"
                        className={styles.bgImage}
                    />
                    <div className={styles.overlay}></div>

                    <div className={styles.content}>
                        <div className={styles.textContent}>
                            <h1 className={styles.title}>
                                Chương trình học mang lại kiến thức
                                <br />
                                tổng quan để đi làm
                            </h1>
                            <p className={styles.description}>
                                Đào tạo theo nhu cầu doanh nghiệp, học viên tham gia chương trình <br/>
                                sẽ có được những giá trị khác biệt: Tiết kiệm thời gian, tiền bạc, công sức
                                <br/>và dễ dàng tham gia và định hướng sự nghiệp.
                            </p>
                            <div className={styles.ctaGroup}>
                                <a href="#courses" className={styles.ctaButton}>
                                    <span className={styles.ctaText}>Đăng ký ngay</span>
                                </a>
                            </div>
                        </div>

                        <div className={styles.pagination}>
                            <svg width="109" height="13" viewBox="0 0 109 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.8" width="109" height="13" rx="6.5" fill="white" />
                                <rect width="27" height="13" rx="6.5" fill="#15CCA3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
