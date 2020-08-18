import React from 'react';

import styles from './card.module.css';

export type CardProps = {
  /**
   * URL of the embeded link of the card
   */
  url: string;
  /**
   * Title of the card
   */
  title: string;
  /**
   * Content of the card
   */
  text: string;
};

/**
 * Render a card with an anchor link embeded by providing a URL.
 */
const Card: React.FC<CardProps> = ({ url, title, text }: CardProps) => (
  <a href={url} className={styles.card}>
    <h3>{title} &rarr;</h3>
    <p>{text}</p>
  </a>
);

export default Card;
