import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Layout } from '../components/Layout'
import thorns from '../images/thorn-divider.svg'
import SoundCloud from '../components/SoundCloud'
import Spotify from '../components/Spotify'
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext

  console.log("frontmatter", frontmatter);

  if (previous) {
    var previousSlug = "/"+previous.slug;
  }

  if (next) {
    var nextSlug = "/"+next.slug;
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center flex-col md:flex-row mb-24 md:mb-12">
          <div className="border w-80 md:w-56 border-black mr-0 md:mr-4 mb-8 md:mb-0">
            <img src={frontmatter.cover.publicURL} alt={frontmatter.title} />
          </div>
          <div>
            <h2 className="text-4xl headline">{frontmatter.title}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {frontmatter.date}
            </p>
            <p className="text-xl">{frontmatter.excerpt}</p>
          </div>
        </div>
      </div>
      <img className="w-full" src={thorns} alt="Thorns Divider" />
      <div className="max-w-5xl mx-auto">
        {frontmatter.spotify
          ?
            <div className="my-16">
              <h3 className="text-2xl my-4">SPOTIFY</h3>
              <Spotify spotify_id={frontmatter.spotify.id} />
            </div>
          :
            ""

        }
        {frontmatter.soundcloud
          ?
            <>
              <div className="my-16">
                <h3 className="text-2xl my-4">SOUNDCLOUD</h3>
                <SoundCloud sc_id={frontmatter.soundcloud.id} sc_slug={frontmatter.soundcloud.path} sc_title={frontmatter.soundcloud.title} />
              </div>
            </>
          :
          ""
        }
      </div>
      {frontmatter.soundcloud || frontmatter.spotify
        ?
          <img className="w-full transform" style={{transform: "scaleX(-1)"}} src={thorns} alt="Thorns Divider" />
        :
          ""
      }
      <div className="max-w-5xl mx-auto">
        <div className="my-16 post-body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="flex space-x-2">
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previousSlug}>
                  <p className="bg-black text-white py-1 px-4">{"< "+previous.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Link to={nextSlug}>
                  <p className="bg-black text-white py-1 px-4">{next.frontmatter.title+" >"}</p>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
        excerpt
        soundcloud {
          id
          path
          title
        }
        spotify {
          id
        }
      }
      body
      slug
    }
  }
`

export default BlogPostTemplate;