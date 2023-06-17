import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../images/banner1.jpg'
import { Link } from 'react-router-dom'
import "../styles/HomeStyle.css"

const Home = () => {
  return (

     <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
         <div className='container'>
            <h1>PIZZA WEBSITE</h1>
            <p>Best Hut in India</p>
            <Link to="/menu">
               <button>order now</button>
            </Link>
         </div>
        </div>
        
     </Layout>
  )
}

export default Home



