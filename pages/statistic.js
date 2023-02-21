import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>you are now a statsitic sucka</h1>
        <h1 className={styles.title}>
          <Link href="/">Go Back</Link>
        </h1>
      </main>
    </div>
  );
}
