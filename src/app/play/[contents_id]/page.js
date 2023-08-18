import Player from 'src/components/Play/Player/Player.js'
import Comments from 'src/components/Play/Comments/Comments.js'

export default function Play(props){
    let contentId = props.params.contents_id;
    
    return(
        <div>
            <Player id={contentId}></Player>
            <Comments></Comments>
        </div>
    )
}