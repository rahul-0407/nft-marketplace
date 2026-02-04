import React from 'react'
import {TiTick} from "react-icons/ti";
import Button from './Button';

const Subscription = ({el, i}) => {
  return (
    <div className='SubscriptionBox'>
      <div class="SubscriptionBox_box">
        <span class="SubscriptionBox_box_span">{el.plan}</span>
        <small className='SubscriptionBox_box_small'>{el.popular || ""}</small>
        <p className='SubscriptionBox_box_price'>{el.price}</p>
        <div class="SubscriptionBox_box_info">{el.service.map((el,i)=>(<p className='SubscriptionBox_box_info_para' key={i+1}><span><TiTick/></span>{el}</p>))}</div>

        <Button btnName="Submit" handleClick={()=>{}} classStyle="button"/>
      </div>
    </div>
  )
}

export default Subscription