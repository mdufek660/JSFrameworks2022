import React from "react";
import styles from "./cats.module.scss";

//create function component named Cats
//the component should render a list of cat images
//the list should be generated from an array of cat images
//https://slides.com/d/EJbs5og/live#/6/0/1

const Cats = () => {
  const catLinkImages = [
    "https://cdn2.thecatapi.com/images/4ub.gif",
    "https://cdn2.thecatapi.com/images/LcXBJ9oWz.jpg",
    "https://25.media.tumblr.com/qgIb8tERiqo49g51UgVLRbuso1_250.jpg",
  ];

  return (
    <div className={styles.container}>
      <h1>Because everyday is a Caturday.</h1>
      <ul className={styles.catsContainer}>
        {catLinkImages.map((cat) => (
          <li key={cat}>
            {/* This line needs to be changed */}
            <img src={cat} alt={"pictures of cats"} className={styles.image} >
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cats;
