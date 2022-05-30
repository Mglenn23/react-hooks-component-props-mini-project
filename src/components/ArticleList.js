import React from "react";
import Article from "./Article";
//  import Article from "./Article";

function ArticleList({ posts }) {
  //   console.log(typeof posts);
  const pList = posts.map((data) => {
    // console.log(data.title);
    return <Article id={data.id} title={data.title} date={data.date} preview={data.preview} minutes={data.minutes} />;
  });

  return <main>{pList}</main>;
}

export default ArticleList;
