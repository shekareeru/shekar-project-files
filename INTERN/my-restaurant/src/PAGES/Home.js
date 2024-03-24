import React from 'react'
import Layout from '../COMPONENTS/Layout'
import { Link } from 'react-router-dom'
import Banner from '../IMAGES/download.jpeg'
import "../STYLE/Homestyle.css"

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
            <h1>Food Website</h1>
            <p>Best Food in India</p>
            <Link to="/menu"/>
            <button>ORDER NOW</button>
          </div>
        </div>
    </Layout>
  )
}

export default Home