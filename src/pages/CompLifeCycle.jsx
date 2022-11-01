
import React, { Component, useEffect, useState } from 'react'

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
    const handleShow = () => { setShow(!show) }

    const [post, setPost] = useState([]) // undefined
    const getPost = async () => {
        try {
            const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
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

    // component did mount
    useEffect(() => {
        console.info("component terlihat di web")
        getPost()
            .then((data) => { setPost(data) })
            .catch((err) => { console.error(err) })
    }, [])

    // comp update
    useEffect(() => {
        console.info("state show di update")
    }, [show])

    return (
        <div className='App'>
            <h1>Component Life Cycle</h1>
            {show ? <h3>fadliselaz</h3> : null}
            <button onClick={handleShow} >show / hide</button>

            {post.map((e) => (
                <div key={e.id}>
                    <h3>{e.title}</h3>
                    <p>{e.body}</p>
                </div>
            ))}
        </div>
    )
}



