import { dateFormatter } from "../../helpers/date-helpers";
import styles from "./post-layout.module.scss";

export default function PostLayout({ title, date, content }) {
  return (
    <main className={`${styles.post} two-column-grid`}>
      <h1>{title}</h1>
      <div className="content">
        <div className={styles.byline}>{dateFormatter(date)}</div>
        <div dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    </main>
  )
}