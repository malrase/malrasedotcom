import styles from "./post-layout.module.scss";

export default function PostLayout({ children }) {
  return (
    <div className={styles.post}>
      {children}
    </div>
  )
}