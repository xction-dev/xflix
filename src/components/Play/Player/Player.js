import "./Player.css";

export default function Player(props) {
  var video = props.content;
  // var playerId = props.playerId;
  // var video = contentsData[playerId];

  return (
    <div className="video-container">
      <iframe
        className="youtube"
        width="1134"
        height="638"
        src={video.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h2>{props.content.title}</h2>
    </div>
  );
}
