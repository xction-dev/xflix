import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";

export default function PlayContainer(props) {
  var id = props.id;

  return (
    <div>
      <Player playerId={id} />
      <Comments commentsId={id} />
    </div>
  );
}
