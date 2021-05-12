import { Link } from "react-router-dom"
function Vid(){
    return(
        <div className="card col-md-3" style={{cursor:"pointer",marginBottom:"3px",marginTop:"3px",paddingLeft:"0px",paddingRight:"0px",marginRight:"20px"}}>
                   
        <video style={{height:"159px"}}    >
        <source src={process.env.REACT_APP_BASE_URL+'/'+vid} type="video/mp4"  />
        </video>
        
        <span className="text-center "><b>{vid}</b></span>
        <Link to={"/video/"+vid}><button className="btn text-center form-control" style={{backgroundColor:"#c2d8eb"}}>Play</button></Link>
        </div>
    )
}
export default Vid