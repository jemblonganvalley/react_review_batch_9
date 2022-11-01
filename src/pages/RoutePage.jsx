import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function RoutePage() {

    //state
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    // function
    const getPost = async () => {
        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await result.json()
            return data
        } catch (error) {
            return error
        }
    }

    // clc
    useEffect(() => {
        getPost()
            .then((res) => {
                setPost(res)
                setLoading(false)
            })
            .catch((err) => { console.error(err) })
    }, [])

    if (loading) {
        return <div>loading please wait...</div>
    }

    return (
        <div className='App'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
