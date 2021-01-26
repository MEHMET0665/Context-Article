import React, { useState, useContext } from "react";
import "./AddArticle.css";

const AddArticle = () => {
  const [article, setArticle] = useState();

  

  return (
    <form className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
