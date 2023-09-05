import PlayContainer from "src/components/Play/PlayContainer/PlayContainer.js";

export default function Play(props) {
  const contentNumber = props.params.content_id;

  return (
    <div>
      <PlayContainer contentId={contentNumber} />
    </div>
  );
}
