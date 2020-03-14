import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ pathname, description, lang, meta, image: metaImage }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname
    ? `${data.site.siteMetadata.siteUrl}${pathname}`
    : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={data.site.siteMetadata.title}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: data.site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: data.site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
      defer={false}
    >
      <link rel="icon" type="image/png" href="/favicon.png"></link>
    </Helmet>
  )
}

Head.defaultProps = {
  lang: "en",
  meta: [],
  description: ``,
}

export default Head
