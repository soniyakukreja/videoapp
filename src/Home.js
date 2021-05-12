import {Link } from "react-router-dom"

function Home(){
    return (
        <>
        <div className="text-center mt-3"><Link to="/myvideos" style={{textDecoration:"none",cursor:"pointer"}}>Click Here to view my video collection</Link></div>
        </>
    )
}

export default Home