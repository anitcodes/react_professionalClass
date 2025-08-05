// Create a React component that displays a post title (using props) and 
// allows the user to like, dislike, and reset the counts using useState.

import React, { useState } from "react";

const Post = (props) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(100);
  const [reset, setReset] = useState();

  return (
    <>
      <h5>Post: {props.postTitle}</h5>
      <h2>Likes: {likes} </h2>
      <h2>Dislikes: {dislikes} </h2>

      <div className="reactions">
        <button onClick={() => setLikes(likes + 1)}>Like</button>
        <button onClick={() => setDislikes(dislikes - 1)}>Disike</button>
        <button
          onClick={() => {
            setLikes(0);
            setDislikes(100);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Post;
