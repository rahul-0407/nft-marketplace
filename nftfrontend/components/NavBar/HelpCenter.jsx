import Link from 'next/link'
import React from 'react'

const HelpCenter = () => {

  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {

      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "SUbscription",
      link: "subscription"
    }
  ]


  return (
    <div className='box'>
      {
        helpCenter.map((el,i)=>(
          <div className='helpCenter'>
            <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter