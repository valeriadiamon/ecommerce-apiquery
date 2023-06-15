import axios from 'axios';
const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1';

const token = window.sessionStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `JWT ${token}` }
}

export const postProduct = (data) => axios.post(`${BASE_URL}/item`, data)

export const getProducts = async () => {
    return await axios.get(`${BASE_URL}/item`)
  }

export const getOneProduct = async (id) => {
    return await axios.get(`${BASE_URL}/item/${id}`)
}

