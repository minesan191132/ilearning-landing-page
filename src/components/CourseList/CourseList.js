import React from 'react';
import styles from './CourseList.module.scss';
import CourseCard from './CourseCard';
import pictureCard from '../../assests/images/picturecard.png';

const coursesData = [
    {
        id: 1,
        image: pictureCard,
        title: 'Khoá học ReactJS – Xây dựng chức năng Github với GraphQL',
        features: [
            'Lazy loading – code splitting – Memoization trong ReactJS',
            'Tìm hiểu GraphQL và so sánh với REST',
            'Sử dụng ApolloLink như Middleware',
            'So sánh Cách Apollo quản lý cache vs Redux quản lý Cache',
            'Unit test & Integration test',
        ],
        price: '7,500,000 đ',
    }
];

const CourseList = () => {
    return (
        <section className={styles.section} id="courses">
                <div className={styles.courseGrid}>
                    {coursesData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
        </section>
    );
};

export default CourseList;
