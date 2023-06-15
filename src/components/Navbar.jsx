import logo from '@/assets/logo.png'
import bag from '@/assets/bag.png'
import { Link } from 'react-router-dom'
import { getSingleUser } from '@/services/UserServices.js'
import { useContext, useRef, useState, useEffect } from 'react'
import { AuthContext } from '@/context/Auth.jsx'

const Navbar = () => {
  const { user, isAuth, logout } = useContext(AuthContext);
  const effectRan = useRef(false) 
  const [userData, setUserData] = useState() 

  useEffect(() => {
    if (user) {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUserData = async () => {
        const result = await getSingleUser(user.id) // Llamo a la API y obtengo la info del usuario
        if (result.status === 200) {
          setUserData(result.data)
        }
      }

      fetchUserData()
    }
  }
    return () => {
      effectRan.current = true
    }
  }, [user])

  console.log("la data del usuario es", userData)
  console.log("esta autenticado" , isAuth)

  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex">
    <Link to='/' className="navbar-brand" href="#">
      <img style={{ width:'5rem' }} src={ logo } />
    </Link>
    <div class="input-group" style={{width:"20rem"}}>
    <input class="form-control" type="search" placeholder="Search product" aria-describedby="button-addon"/>
    <button className="btn btn-secondary" type="button" id="button-addon2" >Search</button>
    </div>
    <div>
      <ul className="navbar-nav me-auto">
      {isAuth ?
      <li className="nav-item">
      <Link
        to='/'
        onClick={logout}>
        logout
      </Link>
      </li> 
        : 
        <li className="nav-item">
        <button className="btn btn-secondary"> 
        <Link to='/register' className="nav-link active">Sign in</Link>
        </button>
      </li>
        }

        {  isAuth  ? 
      <li className="nav-item">
        <p className="nav-link active">
        Welcome {userData?.first_name} {userData?.last_name}
        </p>
      </li>
      :
      <li className="nav-item">
        <Link to='/login' className="nav-link active">Login</Link>
      </li>
  }
        <li>
        <img className='bag' style={{ width:'2rem' }} src={ bag } />
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar