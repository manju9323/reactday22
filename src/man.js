import React from "react"



function Man({det,carter}) {

const {pic,name,price,option}=det;

  return (
    <div className='main'>
<img src={pic} alt={name} className="product-img"/>
<div className='main-cont'>
<div className='bold'>{name}</div>
<div>{price}</div>
<br/>
<button className='option' onClick={()=>carter(det)}>{option}</button>
</div>
    </div>
  )
}

export default Man