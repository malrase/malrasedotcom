import { dateFormatter } from "../../helpers/date-helpers";
import styles from "./post-layout.module.scss";

export default function PostLayout({ title, date, content }) {
  return (
    <main className={styles.post}>
      <h1>{title}</h1>
      <div className="byline">{dateFormatter(date)}</div>
      <div dangerouslySetInnerHTML={{__html:content}}/>
    </main>
  )
}