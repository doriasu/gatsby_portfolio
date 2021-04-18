/// <reference path="../__generated__/gatsby-types.ts" />
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from 'gatsby-image'
import Github from "../atoms/github"
import Hatena from "../atoms/hatena"

const Profile: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ProfileimgQuery>(query)
  return (
    <div className="pb-8">
      <div className="text-4xl border-b-2 border-black inline-block">
        Profile
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
        <div className="grid place-items-center">
          <Img fixed={data.icon.childImageSharp.fixed} />
        </div>
        <div>
          Web Engineer
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 pb-4">
            <div className="grid items-center">名前</div>
            <div>
              Takuro Omori
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 pb-4">
            <div className="grid items-center">所属</div>
            <div>
              EEIS, Graduate School of Engineering, The University of Tokyo
              Master 1st Shimokawabe lab
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 pb-4">
            <div className="grid items-center">趣味</div>
            <div>travel, ski, music game, vocaloid</div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 pb-4">
            <div className="grid items-center">email</div>
            <div>takuandtetsu[at]live.jp</div>
          </div>
          <div className="flex">
            <Github url="https://github.com/doriasu" />
            <Hatena url="https://doradorasuki.hatenablog.com/" />
          </div>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query Profileimg {
    icon: file(relativePath: { eq: "syakura.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Profile
