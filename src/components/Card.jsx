 import styles from './Card.module.css';  

const Card = ({ title, description, image, platform, end_date, url ,type}) => {
  return (
    <div className={styles.cardframe}>
      <img className={styles.cardimage} src={image || "https://placehold.co/300x250"} alt={title} />
      <h1 className={styles.cardtitle}>{title}</h1>
      <p className={styles.cardDescription} >{description}</p>
      <hr></hr>
      <div className={styles.type}>  {type}</div>
      <p className={styles.platform} >Platform: {platform}</p>
      <p className={styles.date} >Ends at: {end_date}</p>
      
      <div className={styles.p}>
        <a className={styles.claim}href={url} target="_blank" rel="noopener noreferrer">
          Claim
        </a>
      </div>
    </div>
  );
};

export default Card;
