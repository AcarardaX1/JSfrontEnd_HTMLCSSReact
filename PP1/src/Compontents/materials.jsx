import React from 'react'
//import { items } from './data.jsx'

function materials({ materials }) {

  const { id, title, description, price, image } = materials;


  return (
    <div className='elements'>

      <div>
        <img src={image} width={250} height={150} />
        <h4 className={'titleMaterial'}>{title}</h4>
        <h5 className={'descriptionMaterial'}>{description}</h5>
        <h3 className={'priceMaterial'}>{price} €</h3>
      </div>


    </div>

  )
}

export default materials
