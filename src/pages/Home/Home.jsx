import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import TitleCard from "../../components/TitleCards/TitleCard";
import Footer from "../../components/Footer/Footer";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a sectret, ancient order, a young man in
            modern istanbul on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <div className="title-cards">
            <TitleCard />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Block Buster Movies"} category={"top_rated"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"To Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;