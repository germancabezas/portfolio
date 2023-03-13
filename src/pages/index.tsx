import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
