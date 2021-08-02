import { Link } from 'gatsby'
import React from 'react'
import siteImage from '../images/moons-tunes-type.png'

export const Header = () => (
  <Link to="/">
    <div className="py-4 mb-24">
      <img className="w-72 mx-auto" src={siteImage} alt="Logo" />
    </div>
  </Link>
)