import styles from './Curations.css'
import curationsData from '/src/mock/curations.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Curations() {
    return (
        <div className="dashboard-container">
            {curationsData.map((curation) => (
                <div className="curation-box" key={curation.id}>
                    <h3 className="curation-title">{curation.title}</h3>
                        <div className="contents-box">
                            {curation.contents.map((content) => (
                                content.type == "youtube" ? // content.type이 youtube이면 play/${id}로 라우팅, writing이면 url 이동
                                    <Link href={'/play/' + content.id} style={{ textDecoration: "none", color: "black"}}>
                                        <div className="content-card clickable">
                                                {/* <Image src={content.thumbnail} alt="thumbnail" fill="true"/> */}
                                                <h5 className="content-title">{content.title}</h5>
                                        </div>
                                    </Link>   
                                    :
                                    <Link href={content.url} style={{ textDecoration: "none", color: "black"}}>
                                        <div className="content-card clickable">
                                                {/* <Image src={content.thumbnail} alt="thumbnail" fill="true"/> */}
                                                <h5 className="content-title">{content.title}</h5>
                                        </div>
                                    </Link>   
                            ))}
                        </div>
                </div>
            ))}
        </div>
    )
}
