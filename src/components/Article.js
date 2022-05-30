import React from "react";

function Article({ id, title, date = "January 1, 1970", preview, minutes }) {
  const emoji = (minutes) => {
    if (minutes < 30) {
      let arr = [];
      let count = minutes / 5;
      // console.log(6 / 5);
      if (count <= 1) {
        arr.push("☕️");
      } else {
        for (let i = 0; i < count; i++) {
          arr.push("☕️");
        }
      }

      return arr.toString();
    } else if (minutes >= 30) {
      let arr = [];
      let count = minutes / 10;
      // console.log(38 / 10);
      if (count <= 3) {
        arr.push("🍱");
      } else {
        for (let i = 0; i < count; i++) {
          arr.push("🍱");
        }
      }
      return arr.toString();
    }
  };
  // console.log(id);
  return (
    <article key={id}>
      <h3>{title}</h3>
      <small>
        {date} {emoji(minutes)}
        {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
