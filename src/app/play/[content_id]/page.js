import PlayContainer from "src/components/Play/PlayContainer/PlayContainer.js";

export default function Play(props) {
  const contentId = props.params.content_id;

  return (
    <div>
      <PlayContainer id={contentId} />
    </div>
  );
}
