import { getOneProduct } from '@/services/ProductServices'
import Loading from '@/components/Loading'
import noImage from '@/assets/no-image.png'
import { useState, useEffect } from 'react'

const BestSellers = () => {
    const [prodList, setProdList] = useState(['5fbc19a65a3f794d72471172', '60658f2830e2f200170c7f2a', '618696054509830017ed1b2a'])
    const [prodOne, setProdOne] = useState()
    /*const [prodTwo, setProdTwo] = useState()
    const [prodThree, setProdThree] = useState()*/
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
      const getData = async () => {
        try{
          const { data } = await getOneProduct('5fbc19a65a3f794d72471172')
          setProdOne(data)
          setLoading(false)
        }
        catch (error) {
          console.log(error)
        }
      }
      getData()
       
  },[]) 

  console.log(prodOne)
  console.log(prodList)

  return (
    <div className="container-fluid">
    <h1 className='text-center'>Los más vendidos</h1>
    { loading ? <Loading/> :
    <div className="d-flex flex-wrap justify-content-center">
    <div className="row">
    <div className='col m-1'>
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={ prodOne?.image || noImage} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{prodOne.product_name}</h5>
            <p className="card-text">
            {prodOne.description}
            </p>
            <p>Precio ${prodOne.price}</p>
            <button className="btn btn-secondary">Agregar al carrito</button>
            </div>
        </div>
    </div>
    </div>
</div>
    }
    
    </div>
  )
}

export default BestSellers