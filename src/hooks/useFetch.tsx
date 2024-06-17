import { useState, useEffect } from 'react'


export function useFetch(url: string) 
{
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => 
    {
        if (!url) return
        setLoading(true)
        async function fetchData() 
        {
            try 
            {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            }
            catch (err) 
            {
                console.log(err)
                setError(true)
            }
            finally 
            {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    //[url] permet de dire à useEffect de ne pas s'exécuter si l'url ne change pas
    return { isLoading, data, error }
}