import styles from "./room.module.scss";

export default function Room() {
  return (
    <article className={`container ${styles.article1}`}>
      <div className={styles.container1}>
        <div className={styles.image1}>
          <img src="/images/Shoot1-433-15.jpg" alt="" />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.image2}>
          <img src="/images/suite6-354-15.jpg" alt="" />
        </div>
      </div>
    </article>
  );
}
