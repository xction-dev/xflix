import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";
import "./PlayContainer.css";
import contentsData from "src/mock/contents.json";

export default function PlayContainer(props) {
  var id = props.id;
  let content = contentsData[id];

  if (content.type != "youtube") {
    return <div>잘못된 접근입니다</div>;
  }

  return (
    <div className="play-container">
      <Player playerId={id} className="player-component" />
      <Comments commentsId={id} className="comments-component" />
    </div>
  );
}
