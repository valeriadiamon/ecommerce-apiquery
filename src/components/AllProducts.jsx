import { useState, useEffect } from 'react'
import { getProducts } from '@/services/ProductServices'
import Loading from '@/components/Loading'
import Card from './Card'

const AllProducts = () => {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(true)

    useEffect(()=> {
    const getData = async () => {
      try{
        const { data } = await getProducts()
        setItems(data)
        setLoading(false)
      }
      catch (error) {
        console.log(error)
      }
    }
    getData()
     
},[])

console.log(loading)
console.log(items)

  return (
    <div className='container-fluid'>
        <h1 className='text-center m-5'>Todos los productos</h1>
        {
          loading ? <Loading/> : <div className='row'>
          <Card data={items} />
      </div>
        }
        
    </div>
  )
}

export default AllProducts