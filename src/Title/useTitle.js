import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title}-Travel BD`
    },[title])
}

export default useTitle;