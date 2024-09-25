import React from "react";
import styles from "../styles/ImageMessage.module.css";

const ImageMessage = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageMessage;
