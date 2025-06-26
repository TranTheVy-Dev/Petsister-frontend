import axios from "axios"
import { useState, useEffect } from "react"

export const usePost = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const API_WEB_URL = process.env.NEXT_PUBLIC_WEB_API_URL
            try {
                const url = `${API_WEB_URL}/post`
                const response = await axios.get(url)
                const data = await response.data.data
                setPosts(data)
            } catch (error) {
                setError(error.message)
            } finally {
            setLoading(false)
            }
        }
        fetchPosts()
    }, [])
    return { posts, loading, error }
}