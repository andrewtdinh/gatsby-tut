import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout style={{ color: `teal` }}>
    <Header headerText="About me" />
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </Layout>
)
