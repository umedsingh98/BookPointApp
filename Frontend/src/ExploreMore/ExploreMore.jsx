import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Explore from '../components/Explore.jsx';
function ExploreMore() {

  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Explore />
    </div>
    <Footer />
    </>
  )
}

export default ExploreMore;