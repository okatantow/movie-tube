import React from 'react'
import './Banner.css'

function Banner() {
    function truncate(string,n){
        return string?.length > n ? string.substr(0, n -1)+ "..." : string

    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.purevpn.com/wp-content/uploads/2021/09/Xclussive-US-Netflixbanner-bg.jpg")`,
        backgroundPosition: "center center"
        }}>
     <div className="banner_contents">
        <h1 className='banner_title'>
            Movie Name
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
           {truncate(`This is a description This is a descriptionThis is a description
           This is a descriptionThis is a descriptionThis is a description
           This is a descriptionThis is a descriptionThis is a description
           This is a descriptionThis is a descriptionThis is a description
           This is a descriptionThis is a descriptionThis is a description
           This is a descriptionThis is a descriptionThis is a description
           This is a description`,165)}
        </h1>
     </div>
     <div className='banner--fadeBottom'>

     </div>
    </header>
  )
}

export default Banner