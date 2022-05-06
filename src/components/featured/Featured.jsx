import "./featured.css";

import React from 'react'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max300/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max300/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=" alt="" />
            <div className="featuredTitle">
                <h1>Austin</h1>
                <h2>456 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max300/102743522.jpg?k=ec1674f7d6baa425ce4d27fcde9327376b0e5d36b7972a12a82285f53761aa68&o=" alt="" />
            <div className="featuredTitle">
                <h1>Reno</h1>
                <h2>225 properties</h2>
            </div>
        </div>      
    </div>
  )
}

export default Featured
