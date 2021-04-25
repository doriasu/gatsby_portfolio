import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
type Props = {
  url: string
}
const Github: React.FC<Props> = props => {
  const data = useStaticQuery<GatsbyTypes.GithubimgQuery>(query)
  return <a href={props.url} target="_blank">
    {data.icon?.childImageSharp?.fixed ?
      <Img fixed={data.icon?.childImageSharp?.fixed} /> : <div>github</div>}
  </a>
}
export const query = graphql`
  query Githubimg {
    icon: file(relativePath: { eq: "GitHub.png" }) {
      childImageSharp {
        fixed(width: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Github;