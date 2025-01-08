import './Counter.css'
import { useState } from 'react'
function Counter() {
   const [count,setcouter] = useState(0)

   const incrimeant=()=>{
    setcouter(count+1)
   }
   const dicrimeant=()=>{
if(count<=0){
    count==0
}else{
    setcouter(count-1)
}
   }
 return(
    <>

<div className="card">
  <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="Card Image" />
  <div className="card-content">
    <h2>Card Title</h2>
    <p>This is a simple, attractive card design using HTML and CSS.</p>
    <div className="btnsection">
    <button onClick={incrimeant}>+</button>  
     <p className='p'>{count}</p>
     <button onClick={dicrimeant}>-</button> 
    </div>
    
     <br/>
     <br/>
    <a href="#" className="btn">
      Learn More
    </a>
  </div>
</div>

    </>
 ) 

}
export default Counter