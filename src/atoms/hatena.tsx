import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
type Props = {
  url: string
}
const Hatena: React.FC<Props> = props => {
  const data = useStaticQuery<GatsbyTypes.HatenaimgQuery>(query)
  return (
    <div>
      <a href={props.url} target="_blank">
        {data.icon?.childImageSharp?.fixed ?
          <Img fixed={data.icon?.childImageSharp?.fixed} /> : <div>hatena</div>}
      </a>
    </div>
  )
}
export const query = graphql`
  query Hatenaimg {
    icon: file(relativePath: { eq: "hatena.png" }) {
      childImageSharp {
        fixed(width: 33) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Hatena
