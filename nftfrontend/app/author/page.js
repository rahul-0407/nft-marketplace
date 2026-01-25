'use client'

import React,{useState, useEffect} from 'react'
import Banner from '@/components/Banner';
import NFTCardTwo from '@/components/NFTCardTwo'
import Brand from '@/components/Brand';
import Title from '@/components/Title';
import AuthorProfileCard from '@/components/AuthorProfileCard';
import AuthorTabs from '@/components/AuthorTabs';
import FollowerTabCard from '@/components/FollowerTabCard';
import AuthorNftCardBox from '@/components/AuthorNftCardBox';

const Author = () => {

    const popularArray = [
        "./user-1.png",
        "./user-2.png",
        "./user-3.png",
        "./user-4.png",
        "./user-5.png",
        "./user-6.png",
        "./user-7.png",
        "./user-8.png"
    ]

    const [collectiables, setCollectiables] = useState(true)
    const [created, setCreated] = useState(false)
    const [like, setLike] = useState(false)
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)

  return (
    <div className='banner'>
        <Banner bannerImage="./creatorbackground-2.jpeg" />
        <AuthorProfileCard/>
        <AuthorTabs setCollectiables={setCollectiables} setCreated={setCreated} setLike={setLike} setFollower={setFollower} setFollowing={setFollowing} />
        <AuthorNftCardBox collectiables={collectiables} created={created} like={like} follower={follower} following={following}/>
        <Title heading="Popular Creators" paragraph="Click on music icon and enjoy NTF music or audio"/>
        {/* {popularArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el} />
        ))} */}
        <Brand/>
    </div>
  )
}

export default Author