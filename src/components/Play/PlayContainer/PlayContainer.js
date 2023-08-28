import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";
import "./PlayContainer.css";

export default function PlayContainer(props) {
  var id = props.id;

  return (
    <div className="play-container">
      <Player playerId={id} className="player-component" />
      <Comments commentsId={id} className="comments-component" />
    </div>
  );
}
