import React from 'react'
import {useState, useEffect} from 'react';

function Posts() {

  const [posts, setPosts] = useState([]);   //state variable for post & and initial value is null list

  useEffect (() => {
    fetch('http://localhost:3000/posts')
    .then((data) => data.json())
    .then((data) => setPosts(data))
    .catch((error) => console.log(error.message))
  }, 
  [] );  //onetime rendering when these page was launch.

  return (
    <div className="d-flex justify-content-center">
      { //ternary operator
        posts.length > 0 ? (
          <div>
            {posts.map((post) => {
              return (
                <div className="my-3" key={post.id}>
                  <div className="d-flex">
                    <img className="rounded-circle dp" src={`http://localhost:3000${post.user.profilePic}`} alt="profile pic" />
                    <h5>{post.user.username}</h5>
                  </div>
                  <div>
                    <img className="image" src={`http://localhost:3000${post.image}`} alt="" />
                  </div>
                  <div>
                    <i className="bi bi-heart" />
                    <i className="bi bi-chat" />
                    <i className="bi bi-send" /> 
                  </div>
                  <div>
                    <b>{post.likes} Likes</b>
                  </div>
                  <p>{post.caption}</p>
                </div>
              );              
            }
            )}
          </div>
        ) : (
          <div>
            Loading......
          </div>
        )
      }
    </div>
  )
}

export default Posts



// npx json-server --watch db.json --port 3000