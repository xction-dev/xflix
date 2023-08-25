import "./ContentCard.css";
import Link from "next/link";
import { isPlayable } from "@/utils-client/isPlayable";

export default function ContentCard({ content }) {
  // content.type이 youtube이면 play/${id}로 라우팅, writing이면 url 이동
  const contentLink = isPlayable(content) ? "/play/" + content.id : content.url;

  return (
    <Link href={contentLink} style={{ textDecoration: "none", color: "black" }}>
      <div className="content-card clickable">
        <img className="content-img" src={content.thumbnail} alt="thumbnail" />
        <h5 className="content-title">{content.title}</h5>
      </div>
    </Link>
  );
}
