import MyInput from "../components/MyInput"

// sebuah function atau class
// yang mereturn element JSX

function MyButton() {
    return (
        <>
            <MyInput />
            <button> ini tombol </button>
        </>
    )
}

export default function ReactComponent() {

    return (
        <div className="App">
            <h1>Hello Component</h1>
            <MyButton />
        </div>
    )
}

