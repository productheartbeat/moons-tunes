import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout'
import Moment from 'react-moment'
import thorns from '../images/thorn-divider.svg'
import dcm from '../images/d_chandler_moon_tomb.png'
import SEO from "../components/seo"


const Home = ({data}) => {

  return (
    <>
      <Layout>
        <SEO title={"Moon's Tunes"} description={"Unpopular. Uncancelled. Unashamed."} />
        <img className="w-88 mx-auto" src={dcm} alt="D Chandler Moon" />
        <img className="w-full py-24 transform" style={{transform: "scaleX(-1)"}} src={thorns} alt="Thorns" />
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <h1 className="text-4xl text-center mb-8 headline">Latest Release</h1>
          <div className="mb-16">
            <h3 className="text-2xl my-4">SPOTIFY</h3>
            <iframe title="Spotify Player" src="https://open.spotify.com/embed/track/2I5gu8W5JJKpB2xCZYoNhk?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div>
            <h3 className="text-2xl my-4">SOUNDCLOUD</h3>
            <iframe title="SoundCloud Player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1072035475&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: "10px;", color: "#cccccc;", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/moonstunes" title="d.chandler.moon" rel="noreferrer" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>d.chandler.moon</a> · <a href="https://soundcloud.com/moonstunes/i-get-lost-i-get-found" title="I get lost I get found" rel="noreferrer" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>I get lost I get found</a></div>
          </div>
        </div>
        <img className="w-full py-24" src={thorns} alt="Thorns" />
        {data.allMdx.nodes.map(
          ({ id, excerpt, slug, frontmatter }) => (
            <div key={id} className="max-w-5xl mx-auto px-4 md:px-0">
              <Link to={slug}>
                <div className="flex items-center flex-col md:flex-row mb-24 md:mb-12">
                  <div className="mr-0 md:mr-4 mb-8 md:mb-0">
                    <div className="w-80 md:w-56">
                      <img className="border-black border" src={frontmatter.cover.publicURL} alt={frontmatter.title} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl headline">{frontmatter.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">
                      <Moment format="MMMM Do, YYYY">
                        {frontmatter.date}
                      </Moment>
                    </p>
                    <p className="text-xl">{excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </Layout>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        slug
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          excerpt
          cover {
            relativePath
            publicURL
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                sizes
              }
            }
          }
        }
      }
    }
  }
`

export default Home;