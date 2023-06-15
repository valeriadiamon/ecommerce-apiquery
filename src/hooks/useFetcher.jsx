import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetcher = (callback) => {
    const [items, setItems] = useState()
    const [loading, setLoading] = useState(true)
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1';
    
    const getProducts = async () => {
        return await axios.get(`${BASE_URL}/item`)
      }

    const getOneProduct = async (id) => {
        return await axios.get(`${BASE_URL}/${id}`)  }  

    useEffect(()=> {
    const getData = async () => {
      try{
        const { data } = await callback()
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

return { items,loading }
}

export { useFetcher }