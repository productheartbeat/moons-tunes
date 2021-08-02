import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <div className="mx-auto relative pb-16">
        <Header siteTitle={title} siteDescription={description} />
        {children}
        <Footer />
      </div>
    </>
  )
}