import axios from "axios"
import { useParams } from "react-router-dom"

function Video(){
    let params = useParams();

    return (
        <>
        <div className="container text-center">
        <h1 className=" mt-1">Watch full Video</h1>

        <video width="750" height="500" controls autoplay="true">
        <source src={process.env.REACT_APP_BASE_URL+"/api/playvideo?filename="+params.id} type="video/mp4"/>
        </video> 
              
        <center><h5  width="750"  className="text-center" style={{width:"750px",backgroundColor:"#c2d8eb"}}><b>{params.id}</b></h5></center>
        </div>
        </>
    )
}

export default Video