import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";
import "./PlayContainer.css";
import contentsData from "src/mock/contents.json";

export default function PlayContainer(props) {
  var id = props.id;
  const contentToPlay = contentsData[id];

  if (contentToPlay.type != "youtube") {
    return <div>잘못된 접근입니다</div>;
  }

  return (
    <div className="play-container">
      <Player content={contentToPlay} className="player-component" />
      <Comments content={contentToPlay} className="comments-component" />
    </div>
  );
}
