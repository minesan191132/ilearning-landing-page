import React, { useState } from 'react';
import styles from './TeamSection.module.scss';
import fptPlayLogo from '../../assests/icon/fptplay.png';
import pharmacityLogo from '../../assests/icon/phamarcity.png';
import kmsLogo from '../../assests/icon/kms.png';
import tmaLogo from '../../assests/icon/tma.png';
import sendoLogo from '../../assests/icon/sendo.png';

const testimonials = [
    {
        id: 1,
        quote: "Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình, luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên",
        name: "Hiếu Hồ",
        location: "HO CHI MINH CITY"
    },
    {
        id: 2,
        quote: "Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình, luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên",
        name: "Hiếu Hồ",
        location: "HO CHI MINH CITY"
    },
    {
        id: 3,
        quote: "Khóa học có lộ trình rõ ràng, a Việt và các bạn Mentor rất nhiệt tình, luôn support ngay lập tức trong buổi học cũng như là ngoài buổi để giải quyết vấn đề của học viên. Kiến thức Mentor sâu rộng nên hầu hết đều trả lời được thắc mắc học viên",
        name: "Hiếu Hồ",
        location: "HO CHI MINH CITY"
    }
];

const instructors = [
    {
        id: 1,
        quote1: "Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc \"chạy\" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.",
        quote2: "Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.",
        name: "Tâm Huỳnh",
        title: "Founder & CEO"
    },
    {
        id: 2,
        quote1: "Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc \"chạy\" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.",
        quote2: "Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.",
        name: "Hiếu Hồ",
        title: "Giảng Viên Frontend"
    },
    {
        id: 3,
        quote1: "Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi. Với việc \"chạy\" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị cho người dùng cũng như doanh nghiệp của bạn.",
        quote2: "Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.",
        name: "Quân Bùi",
        title: "Giảng Viên iOS"
    }
];

const TeamSection = () => {
    const [currentInstructor, setCurrentInstructor] = useState(0);

    const handlePrev = () => {
        setCurrentInstructor((prev) => (prev === 0 ? instructors.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentInstructor((prev) => (prev === instructors.length - 1 ? 0 : prev + 1));
    };

    const activeInstructor = instructors[currentInstructor];

    return (
        <section className={styles.teamSection}>
            <div className={styles.container}>
                <div className={styles.ctaWrapper}>
                    <button className={styles.enrollBtn}>Tất cả khoá học</button>
                </div>
                <div className={styles.sectionHeader}>
                    <span className={styles.subTitle}>Cảm nhận của học viên</span>
                    <h2 className={styles.title}>Mọi người nói gì về UI8</h2>
                </div>

                <div className={styles.testimonialGrid}>
                    {testimonials.map(t => (
                        <div key={t.id} className={styles.testimonialCard}>
                            <div className={styles.quoteIcon}>
                                “
                            </div>
                            <p className={styles.testimonialText}>{t.quote}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}></div>
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>{t.name}</h4>
                                    <span className={styles.authorLocation}>{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Instructor */}
                <div className={styles.sectionHeader}>
                    <span className={styles.subTitle}>Nhân sự nòng cốt</span>
                    <h2 className={styles.title}>Đội ngũ giảng viên</h2>
                </div>

                <div className={styles.instructorCard}>
                    <div className={styles.instructorImage}></div>
                    <div className={styles.instructorContent}>
                        <div className={styles.quoteIconWhite}>
                            “
                        </div>
                        <p className={styles.instructorQuote}>{activeInstructor.quote1}</p>
                        <p className={styles.instructorQuote}>{activeInstructor.quote2}</p>
                        <div className={styles.instructorMeta}>
                            <h4 className={styles.instructorName}>{activeInstructor.name}</h4>
                            <span className={styles.instructorTitle}>{activeInstructor.title}</span>
                        </div>

                        <div className={styles.carouselControls}>
                            <div className={styles.arrows}>
                                <button className={styles.arrowBtn} onClick={handlePrev}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className={`${styles.arrowBtn} ${styles.arrowBtnActive}`} onClick={handleNext}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={styles.dots}>
                                {instructors.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`${styles.dot} ${idx === currentInstructor ? styles.active : ''}`}
                                        onClick={() => setCurrentInstructor(idx)}
                                    ></span>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div className={styles.partnersSection}>
                    <span className={styles.subTitle}>Khách hàng và</span>
                    <h2 className={styles.title}>Đối tác của UI8</h2>

                    <div className={styles.partnersCarousel}>
                        <button className={styles.carouselArrow}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className={styles.partnersLogos}>
                            <img src={fptPlayLogo} alt="FPT Play" />
                            <img src={pharmacityLogo} alt="Pharmacity" />
                            <img src={kmsLogo} alt="KMS Technology" />
                            <img src={tmaLogo} alt="TMA Solutions" />
                            <img src={sendoLogo} alt="Sendo" />
                        </div>

                        <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamSection;
