import React from 'react'

const menucard = ({menuData}) => {
  
  return (
    <>
<section className="main-card--container ">
{menuData.map((curElem) =>{
  const {id, name,category,image,description,price} = curElem
  return(
    <>
    
    <div className='card-container ' key={id} >
            <div className='card '>
              <div className='card-body '>
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'> {name} </span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'> {description} 
                </span>
                <div className='card-read'>Read</div>
                <img src={image}alt="" className='card-media rounded-3xl' />
                <span className='card-tag subtle'>Order Now</span>
                <span className='card-tag subtle mx-1'>{price}</span>

              </div>
            </div>
  </div>
  </>

  )
})}
</section>
    </>
  )
}

export default menucard