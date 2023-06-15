import notFound from '@/assets/notFound.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <img className="card-img-top" style={{width:"80%"}} src={ notFound } alt="Card image cap" title="Details" />
        <Link to='/'><h1>Go back home</h1></Link>
      </div>
    )
  }
  
  export default NotFound