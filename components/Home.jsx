import { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    
    return (
        <>
            <h1>Amanda Yee</h1>
            <p>Full-Stack Software Engineer <br></br>
                Based in Brooklyn, New York
            </p>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    )
}

export default Home