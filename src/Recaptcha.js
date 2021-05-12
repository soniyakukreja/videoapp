import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"


const RECAPTCHA_SERVER_KEY = "6LfiQ8caAAAAAPiwj3BGSQjWy5hhT8sufM5gBisk"


function onChange(humanKey) {
  //  console.log("humanKey:", humanKey)

  const data = {secret: RECAPTCHA_SERVER_KEY,
      response:humanKey,
  }

 // console.log("data:", data)

 const isHuman =  fetch(`/recaptcha/api/siteverify`, {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
  },
  body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
})
  .then(res =>{ 
    console.log('res',res)

    res.json() } )
  .then(
    json =>{ 
      console.log('json')

     // json.success
    }
    
    )
  .catch(err => {
    console.log('errr')

    throw new Error(`Error in Google Siteverify API. ${err.message}`)
  })

if (humanKey === null || !isHuman) {
  console.log('error')
  throw new Error(`YOU ARE NOT A HUMAN.`)
}

  

  // fetch("/recaptcha/api/siteverify", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`,
  // })
  // .then(response => {
  //   console.log('response',response)
  //   //return response.json()
  // }
  // ) 
  // .then(data => {
  //   res.locals.recaptcha = data;
  //   return next();
  // });

    // axios({
    //     url:"/recaptcha/api/siteverify",
    //     method:"post",
    //     data: data,
    //     headers: {
    //         "Access-Control-Allow-Origin":"*",
    //         "Accept": "application/json",
    //         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    //       },
    // }).then((response)=>{
    //   console.log("data:", data)

    //     console.log("recaptcha response : ",response)
      
    // }, (error)=>{
    //     console.log("recaptcha error : ",error)
    // })







}
  
  export default function Recaptcha() {
    return (
      <>
      <div style={{marginTop:"5px",marginBottom:"5px"}}><h5>Google Recaptcha practice</h5>
      </div>
     
    <ReCAPTCHA sitekey="6LfiQ8caAAAAAJlk0wOII9P91KbHzaUwKSAeUasE" onChange={onChange} />
   
    </>
    )
  }