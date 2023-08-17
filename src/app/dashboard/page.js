import Header from "@/components/Header/Header"
import Curations from "@/components/Curations/Curations"

export default function Dashboard() {

    return (
        <div>
            <Header />
            <Curations />
        </div>
    )
}

// 1. curations.json의 제목을 갖고 와서 map으로 리스트
// 2. 각 curation 제목의 하단에 content를 리스트 형태로 보여줌