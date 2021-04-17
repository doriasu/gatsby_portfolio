import * as React from "react"
import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import Profile from '../components/profile'
import Skill from '../components/skill'
const BlogIndex: React.FC = () => {

  return (
    <div className="w-3/5 mb-0 mt-7 mx-auto">
      <SEO title="All posts" />
      <Header />
      <Profile />
      <Skill />
    </div>
  )
}

export default BlogIndex

