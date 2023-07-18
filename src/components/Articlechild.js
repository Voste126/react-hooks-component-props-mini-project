import React from "react";
const posts = [
    {
      id: 1,
      title: "Introduction to React",
      content: "This is a beginner's guide to React.",
      preview: 5 ,
      date: "January 1, 1970"
    },
    {
      id: 2,
      title: "React Hooks",
      content: "Learn how to use hooks in React for state management.",
      preview: 20,
      date: "January 1, 1970"
    },
    {
      id: 3,
      title: "React Router",
      content: "Explore routing in React applications with React Router.",
      preview: 45,
      date: "January 1, 1970"
    },
  ];

  //constant to iterate through the code 
const MydisplayPost = posts.map((post) => {
 //bonus points 

    return( <li className = "mylist" key={posts.id}>
        <span><h3>{post.title}</h3></span>
        <small>{post.date}</small>.<p>{post.preview}min read</p>
        <p>{post.content}</p>
        </li>);
})
function ArticleChild(){
//Bonus points 
    return(
        <article>
            {MydisplayPost}
        </article>
    )
}

export default ArticleChild;