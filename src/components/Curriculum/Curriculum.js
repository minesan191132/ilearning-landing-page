import React, { useState } from 'react';
import styles from './Curriculum.module.scss';
import AccordionItem from './AccordionItem';

const curriculumData = [
  {
    id: 1,
    title: 'GIAI ĐOẠN HỌC 1: Chuẩn bị nền tảng',
    duration: '5 buổi',
    topics: [],
  },
  {
    id: 2,
    title: 'GIAI ĐOẠN HỌC 2:\nChuyên môn sâu - Hướng chuyên sâu 1:\nLập trình viên java',
    duration: '5 buổi',
    topics: [
      'Môn 3: Lập trình hướng đối tượng',
      'Môn 4: Cấu trúc dữ liệu và giải thuật',
      'Môn 5: Các hệ cơ sở dữ liệu',
      'Môn 6: Phát triển ứng dụng web',
      'Môn 7 (không bắt buộc): Lập trình di động',
    ],
  },
  {
    id: 3,
    title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
    duration: '5 buổi',
    topics: [],
  },
  {
    id: 4,
    title: 'GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack',
    duration: '5 buổi',
    topics: [],
  },
];

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section} id="curriculum">
      <div className={styles.container}>
        <div className={styles.curriculumWrapper}>
          <h2 className={styles.mainTitle}>Giáo trình</h2>
          <div className={styles.accordionContainer}>
            {curriculumData.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <button className={styles.enrollBtn}>Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
