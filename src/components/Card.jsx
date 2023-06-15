import noImage from '@/assets/no-image.png'
import { useState } from "react"
import { Link } from "react-router-dom"


const Card =  ( {data} ) => {
    const [cant, setCant] = useState(20)

  return (
    <>
    <div className="container-fluid d-flex flex-wrap justify-content-center">
        {data.slice(0, cant).map(item => (
            <div key={item._id}>
            <div className='col m-1'>
            <div className="card" style={{width: '18rem'}}>
            <Link to={`/item/${item._id}`}>
            <img className="card-img-top" src={ item?.image || noImage} alt="Card image cap" title="Details" /></Link>
            <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <p className="card-text">
                {item.description}
                </p>
                <p>Precio ${item.price}</p>
                <button className="btn btn-secondary">Add to cart</button>
            </div>
        </div>
        </div>
        </div>
        ))}
    </div>
    <button className="btn btn-secondary p-2 ms-auto me-auto mt-2 mb-5 w-75 " onClick={() => setCant(cant + 20)}> Ver más </button>
    </>
  )
}

export default Card