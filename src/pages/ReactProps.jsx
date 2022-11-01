

function MyCustomButton( props ){
    return (
        // area JSX
        <button { ...props } > 
            { props.content } 
        </button>
    )
}

function MyCustomDiv( props ){
    return (
        <div style={{
            padding : 20, 
            margin : "20px 0",
            backgroundColor : "whitesmoke",
            borderRadius : 12, 
            color : "black"   
        }}>
            { props.children } 
        </div>
    )
}

export default function ReactProps() {
  return (
    <div className='App'>
        <h1>React Props</h1>
        <MyCustomButton 
            content="button 1" 
            style={{backgroundColor : 'yellow'}} 
            onClick={()=>{alert("button 1")}}  
        />

        <MyCustomDiv>
            <h1>Apapun</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quisquam sunt tempora doloribus, reprehenderit at itaque suscipit provident blanditiis quae eaque corrupti tenetur voluptates repellendus omnis ratione cumque officiis esse. </p>
            <MyCustomButton content="button 3"  />
        </MyCustomDiv>

        <MyCustomDiv>
            <h1>Div Lainnya</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque cumque doloremque sed deserunt voluptatum vel commodi labore quo, aut soluta laborum distinctio in vero et sunt, ea blanditiis nemo ad!</p>
            <MyCustomButton content="button 2"  />
        </MyCustomDiv>

    </div>
  )
}
