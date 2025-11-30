import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Stories() {

  const[stories, setStories] = useState([]);
  const navigate = useNavigate() ;

  let tot=0;

  useEffect(() => {
    fetch('http://localhost:3000/story')
    .then((data) => data.json())
    .then((data) => setStories(data))
    .catch((error) => console.log(error))
  }, [])

  return (

    <div className="story d-flex">
      <div className="d-none">
        {tot = stories.length}
      </div>
      {stories.length > 0 ? 
      (        
        stories.map((story) => (
          <div key={story.id} className="mx-2" onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className="gradient-border">
              <img src={`http://localhost:3000${story.user.profilePic}`} alt="story dp" className="story-dp rounded-circle" />
            </div>
            <p className="text-truncate" style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))      
      ) 
        : 
      (
        <div>
          <p>Loading.......</p>
        </div>        
      )}
    </div>

  );

}

export default Stories