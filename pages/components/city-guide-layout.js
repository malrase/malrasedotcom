import styles from "./post-layout.module.scss";

export default function CityGuideLayout({ title, content }) {
  return (
    <main className={`${styles.city} two-column-grid`}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    </main>
  )
}