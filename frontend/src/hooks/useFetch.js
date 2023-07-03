import {useState, useEffect} from "react"
import axios from "../api"

export const useFetch = (api, reload, innerData) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios.get(api)
            .then(res => {
                setData(res.data?.innerData)
            })
            .catch(err =>{
                setError(err.response.data?.msg)
            })
            .finally(()=> setLoading(false))
    }, [reload, innerData])

    return {data, loading, error}

}