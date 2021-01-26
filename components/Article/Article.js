import React from "react";
import "./Article.css";

const article = () => {
  return(
  <div className="article">
   <h1>{this.props.article.title}</h1> 
   <p>{this.props.article.body}</p> 
  </div>)
};

export default article;
