import React from 'react';
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import barChart from "../../assets/img/bar-chart.png";
import book from "../../assets/img/book.png";
import budget from "../../assets/img/budget.png";
import money from "../../assets/img/money.png";
import pieChart from "../../assets/img/pie-chart.png";

import styles from './HomePage.css';

const HomePage = () => {
    return (
        <>
        <div className={styles.homeBackground}>
            <div className={styles.homeLineWrapper}>
                <div className={styles.homeLine} />
                <div className={styles.homeLine} />
            </div>
            <ContentContainer containerClassName={styles.homeContainer}>
                <div className={styles.homeCircle}>
                    <img className={styles.homeBarChart} src={barChart} alt={"image"}/>
                </div>
                <div className={styles.homeCircle}>
                    <img className={styles.homeBook} src={book} alt={"image"}/>
                    <img className={styles.homeMoney} src={money} alt={"image"}/>
                </div>
                <div className={styles.homeCircle}>
                    <img className={styles.homeBudget} src={budget} alt={"image"}/>
                    <img className={styles.homePieChart} src={pieChart} alt={"image"}/>
                </div>
                <div className={styles.homeMainTitle}>
                    Your financial book
                </div>
            </ContentContainer>
        </div>
        </>
    );
};

export default HomePage;