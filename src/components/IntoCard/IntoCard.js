import React from 'react'
import styles from './IntoCard.module.scss'

const IntoCard = () => {
  return (
    <section className={styles.sectionContainer}>
        <div className={styles.container}>
                <div className={styles.sectionHeader}>

                    <h2 className={styles.sectionTitle}>
                        <span>
                            <h4>
                            Bạn đã tự tin để trở thành Senior Software <br/>Engineer?
                            </h4>
                        </span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Ngành IT đang ngày càng phát triển và thay đổi nhanh chóng. Từ đó, chất lượng các kỹ sư cũng ngày càng được yêu cầu khắc khe hơn. Chúng tôi thấu hiểu những khó khăn trên con đường trở thành Senior Software Engineer và tự tin giúp bạn có thể thực hiện được điều đó.
                    </p>
                </div>
                <div className={styles.sectionSpanner}>
                                    <span className={styles.subTitle}>Trải nghiệm dự án thực tế cùng UI8</span>
                                    <h2 className={styles.title}>Các khoá học sắp khai giảng</h2>
                </div>
        </div>
    </section>
  )
}

export default IntoCard
