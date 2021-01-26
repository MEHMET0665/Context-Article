import React, { useState, useContext } from "react";
import "./AddArticle.css";
import {ArticleContext} from '../context/articleContext'

const AddArticle = () => {
  // const { saveArticles } = useContext(ArticleContext)
  const { dispatch } = useContext(ArticleContext) 
  const [article, setArticle] = useState();

  const hanleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };
const addNewArticle=(e) =>{
e.preventDefault()
dispatch({ type: "ADD_ARTICLE", article })
// saveArticles(article)

}

  return (
    <form className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={hanleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={hanleArticleData}
      />
      <button onClick={addNewArticle}>Add article</button>
    </form>
  );
};
export default AddArticle;
