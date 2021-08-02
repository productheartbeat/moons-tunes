import { Link } from 'gatsby'
import React from 'react'

export const Footer = () => (
  <Link to="/">
    <div className="mt-24 bg-black text-white p-2 absolute bottom-0 left-0 right-0">
      <p>
        &copy; 2021 Moon's Tunes
      </p>
    </div>
  </Link>
)