'use client'

import React, {useState, useEffect} from 'react'
import {BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3, BsAlarmFill} from "react-icons/bs"
import DaysComponents from './DaysComponents/DaysComponents'

const Collection = () => {

  const [popular, setPopular] = useState(false)
  const [following, setFollowing] = useState(false)
  const [news, setNews] = useState(false)

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    if(!popular){
      setPopular(true)
      setFollowing(false)
      setNews(false)
    }
  }
  const openFollowers = () => {
    if(!following){
      setPopular(false)
      setFollowing(true)
      setNews(false)
    }
  }
  const openNews = () => {
    if(!news){
      setPopular(false)
      setFollowing(false)
      setNews(true)
    }
  }

  return (
    <div className='collection'>
        <div className="collection_title">
          <h2>Top List Creators</h2>
          <div className="collection_collections">
            <div className="collection_collections_btn">
              <button onClick={()=>openPopular} ><BsAlarmFill/> Last 24 hours</button>
              <button onClick={()=>openFollowers} ><BsCalendar3/> Last 7 days</button>
              <button onClick={()=>openNews} ><BsFillCalendarDateFill/> Last 30 days</button>
            </div>
          </div>
        </div>
        {
          popular && (
            <div className="collection_box">
              {cardArray.map((el, i)=>{
                <DaysComponents key={i+1}/>
              })}
            </div>
          )
        }
        {
          following && (
            <div className="collection_box">
              {followingArray.map((el, i)=>{
                <DaysComponents key={i+1}/>
              })}
            </div>
          )
        }
        {
          news && (
            <div className="collection_box">
              {newArray.map((el, i)=>{
                <DaysComponents key={i+1}/>
              })}
            </div>
          )
        }
    </div>
  )
}

export default Collection