import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/restaurantchef.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">San Francisco</h2>
          <p>
          Located in the vibrant center of San Francisco, Little Lemon is a fusion of contemporary style and comforting tradition. Our eclectic and artisan menu, boasting mouth-watering bruschettas, juicy burgers, and crisp Greek salads, reflects our philosophy that culinary creation is an art form. Our skilled chefs prepare each dish with locally-sourced ingredients, ensuring every meal is not just a treat for the taste buds but also a nourishment for the soul. Little Lemon is the perfect spot for a romantic evening, a family gathering, or a casual hangout with friends. Come and discover your culinary haven in the heart of San Francisco for a dining experience you'll always remember.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
