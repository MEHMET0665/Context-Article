import React, { useState } from "react"
import Article from "../components/Article/Article"

const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ])

  return (<div>
            {articles.map(article=>(<Article article={article}/>))}
          </div>
            )
}

export default Articles