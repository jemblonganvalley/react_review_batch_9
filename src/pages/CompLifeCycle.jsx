
import React, { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom"

// export default class CompLifeCycle extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             username: "fadliselaz"
//         }
//     }

//     handleChange = () => {
//         this.setState({
//             username: "evalia"
//         })
//     }

//     // comp did mount
//     componentDidMount() {
//         console.info("component sudah di mounting")
//     }

//     componentDidUpdate() {
//         console.info("ada component yang telah di update")
//     }

//     componentWillUnmount() {
//         console.info("good bye")
//     }

//     render() {
//         return (
//             <div className='App'>

//                 <h1>Comp Life Cycle</h1>
//                 <h2> {this.state.username} </h2>
//                 <button onClick={this.handleChange} >change</button>

//             </div>
//         )
//     }
// }


export default function CompLifeCycle() {

    //state
    const [show, setShow] = useState(false)
    const [post, setPost] = useState([]) // undefined
    const [page, setPage] = useState(1)

    // function
    const handleShow = () => { setShow(!show) }
    const getPost = async () => {
        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            const data = await result.json()
            return data
        } catch (error) {
            return error
        }
    }

    // next / prev page
    const nextPage = () => { setPage(page + 1) }
    const prevPage = () => {
        if (page <= 1) {
            return //code berhenti disini
        }
        setPage(page - 1)
    }

    // component did mount
    useEffect(() => {
        getPost()
            .then((data) => { setPost(data) })
            .catch((err) => { console.error(err) })
    }, [page])

    return (
        <div className='App'>
            <h1>Component Life Cycle</h1>
            {show ? <h3>fadliselaz</h3> : null}
            <button onClick={handleShow} >show / hide</button>

            {post.map((e) => (
                <div key={e.id}>
                    <h3>{e.id} . {e.title}</h3>
                    <p>{e.body}</p>
                    <Link to={`/route/${e.id}`} >lihat</Link>
                </div>
            ))}
            <div>
                <button onClick={prevPage}>prev</button>
                {page}
                <button onClick={nextPage}>next</button>
            </div>
        </div>
    )
}



