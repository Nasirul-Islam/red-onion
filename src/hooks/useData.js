import { useEffect, useState } from "react"

const useData = () => {
    const [datas, setDatas] = useState({});
    useEffect(() => {
        fetch("./appData.json")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return { datas };
}

export default useData;