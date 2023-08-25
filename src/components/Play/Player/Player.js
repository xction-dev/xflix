import contentsData from "src/mock/contents.json";
import "./Player.css";

export default function Player(props) {
  var playerId = props.playerId;
  var content = contentsData[playerId];

  if (content.type != "youtube") {
    //이 로직이 아닌 것 같은데.. 일단 써봄
    return <div></div>;
  }

  return (
    <div className="video-container">
      <iframe
        className="youtube"
        width="1134"
        height="638"
        src={content.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h2>{content.title}</h2>
    </div>
  );
}
