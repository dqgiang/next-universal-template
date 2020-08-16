import React from 'react';

import styles from './card.module.css';

export type CardProps = {
  url: string;
  title: string;
  text: string;
};

const Card = ({ url, title, text }: CardProps) => (
  <a href={url} className={styles.card}>
    <h3>{title} &rarr;</h3>
    <p>{text}</p>
  </a>
);

export default Card;
