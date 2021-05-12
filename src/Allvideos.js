import axios from "axios"
import { useState, useEffect, Fragment } from "react"
import { Link } from "react-router-dom"

function Allvideos(){
    const [myvid,setMyvid] = useState([])
    useEffect(()=>{

        axios({
            method: "get",
            url :process.env.REACT_APP_BASE_URL+"/api/allassets",
        }).then((response) => {

            console.log("response ", response)
            setMyvid(response.data.videos)
            }, (error) => {
            console.log("vid api error : ", error)
        })

    },[])

    return (
        <>
        <h1 className="text-center" >My Video Collection</h1>
        <div className="container">
        <div className="row">

            {
            myvid.map((vid,index)=>{
                //console.log('each',each)
                return(
                    <Fragment key={index} >
                    <div className="card col-md-3" style={{cursor:"pointer",marginBottom:"3px",marginTop:"3px",paddingLeft:"0px",paddingRight:"0px",marginRight:"20px"}}>

                    
                    <video style={{height:"159px"}}   >
                    <source src={process.env.REACT_APP_BASE_URL+'/'+vid} type="video/mp4"  />
                    </video>
                    
                    <span className="text-center "><b>{vid}</b></span>
                    <Link to={"/video/"+vid} ><button className="btn text-center form-control" style={{backgroundColor:"#c2d8eb"}}>Play</button></Link>
                    </div>
                    </Fragment>
                )
            })

            
            }
        </div></div>
        </>
    )
}

export default Allvideos