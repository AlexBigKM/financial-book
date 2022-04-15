import React from 'react';
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import barChart from "../../assets/img/bar-chart.png";
import book from "../../assets/img/book.png";
import budget from "../../assets/img/budget.png";
import money from "../../assets/img/money.png";
import pieChart from "../../assets/img/pie-chart.png";

import './HomePage.css';

const HomePage = () => {
    return (
        <>
        <div className={"homeBackground"}>
            <div className={"homeLineWrapper"}>
                <div className={"homeLine"} />
                <div className={"homeLine"} />
            </div>
            <ContentContainer containerClassName={"homeContainer"}>
                <div className="homeCircle">
                    <img className="homeBarChart" src={barChart} alt={"image"}/>
                </div>
                <div className="homeCircle">
                    <img className="homeBook" src={book} alt={"image"}/>
                    <img className="homeMoney" src={money} alt={"image"}/>
                </div>
                <div className="homeCircle">
                    <img className="homeBudget" src={budget} alt={"image"}/>
                    <img className="homePieChart" src={pieChart} alt={"image"}/>
                </div>
                <div className={"homeMainTitle"}>
                    Your financial book
                </div>
            </ContentContainer>
        </div>
        </>
    );
};

export default HomePage;