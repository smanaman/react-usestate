import './Counter.css'
import { useEffect, useState } from 'react'
function Counter() {
  const [count, setcouter] = useState(1)
  const [massege, setmessege] = useState('')
  let max = 5;
  useEffect(() => {
    document.title = `Count : ${count}`
    if (count == max) {
      setmessege('Max limit')
    }else{
      setmessege('')
    }
  })

  const incrimeant = () => {
    setcouter(count + 1)
  }
  const dicrimeant = () => {
    if (count <= 1) {
      count == 0
    } else {
      setcouter(count - 1)
    }
  }
  return (
    <>

      <div className="card">
        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="Card Image" />
        <div className="card-content">
          <h2>Card Title</h2>
          <p>This is a simple, attractive card design using HTML and CSS.</p>
          <div className="btnsection">
          <button onClick={dicrimeant}>-</button>

            <p className='p'>{count}</p>
            <button onClick={incrimeant} disabled={count==max}>+</button>
          </div>

          <br />
          <br />
          <a href="#" className="btn">
            Learn More
          </a><br />
          <p>{massege}</p>
        </div>
      </div>

    </>
  )

}
export default Counter