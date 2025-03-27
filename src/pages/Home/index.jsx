import {
  Link
} from 'react-router'

const Home = ()=>{
  return (
    <div className="w-100 p-5 text-center">
      <h1>Home</h1>
      <Link to={"/login"} className='btn btn-primary'>Login</Link>
    </div>
  )
}

export default Home