import styles from "./homepage.module.css";

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>404: Not Found</h1>
    </div>
  );
}

export default NotFound;
