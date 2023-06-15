import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOneProduct } from '@/services/ProductServices'
import noimg from '../assets/no-image.png'
import Loading from "@/components/Loading"

const ProductDetail = () => {
    const param = useParams()
    const [ consulta, setConsul ] = useState()

    const getData = async () => {
        try {
          const { data } = await getOneProduct(param.id)
          setConsul(data)
          console.log(data)
        }
        catch (error){
          //console.log('ocurrio un error',error.response.status)
          setConsul(error.response.status)
        }
      }
      useEffect(() => {
        getData()
      }, [])

  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center">
       { consulta == null ? <Loading/> :
        <div className="d-flex">
        <img src={ consulta?.image || noimg } className="card-img-top" alt={ consulta.product_name } style={{width:"50%"}} /> 
        <div className="m-5">
          <h5 className="card-title" style={{textTransform:'uppercase'}}>
            <b> { consulta.product_name } </b>
          </h5>
          <p> { consulta.description }</p>
          <p>Precio ${consulta.price}</p>
          <div className="d-flex justify-content-around">
          <button className="btn btn-secondary flex-grow-1">Add to cart</button>
          <button className="btn btn-secondary flex-grow-1 ms-5">Shop now</button>
          </div>
          </div> 
      </div>
       } 
    </div>
  )
}

export default ProductDetail