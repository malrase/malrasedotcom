import Link from "next/link";
import { Posts2016 } from "./post-information.js";
import { dateFormatter } from "../../helpers/date-helpers";

export default function PostIndex() {

  return (
    <div>
      <h1>Blog</h1>
      <h2>2020</h2>
      
      <h2>2016</h2>
      <ul>
        {Posts2016.map(post => {
          return (
            <li>
              <Link href={`./posts/2016/${post.href}`}>{post.title}</Link>
              <div className="byline">{dateFormatter(post.date)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
