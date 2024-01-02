import React from "react";
import "./About.css";
import Image from "../../../assets/restauranfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">San Francisco</h2>
        <p className="about-description">
          Located in the vibrant center of San Francisco, Little Lemon is a fusion of contemporary style and comforting tradition. Our eclectic and artisan menu, boasting mouth-watering bruschettas, juicy burgers, and crisp Greek salads, reflects our philosophy that culinary creation is an art form. Our skilled chefs prepare each dish with locally-sourced ingredients, ensuring every meal is not just a treat for the taste buds but also a nourishment for the soul. Little Lemon is the perfect spot for a romantic evening, a family gathering, or a casual hangout with friends. Come and discover your culinary haven in the heart of San Francisco for a dining experience you'll always remember.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
