import React from 'react'
import { Layout } from '../components/Layout'

const FourOhFour = () => {

  return (
    <>
      <Layout>
      <div className="flex items-center flex-col md:flex-row mb-24 md:mb-12">
          <div>
            <h2 className="text-4xl headline">This Page Can't Be Found</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default FourOhFour;