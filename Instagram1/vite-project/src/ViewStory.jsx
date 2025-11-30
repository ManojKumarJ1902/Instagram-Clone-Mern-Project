import React from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function ViewStory() {

    const {id, tot} = useParams();
    const [story, setStory] = useState(null);
    const navigate = useNavigate();

    if(Number(id) > Number(tot) || Number(id) < 0){
      navigate('/');
    }

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
        .then((data) => {
          if(!data.ok){
            throw new Error("story not found");
          }           
          return data.json()
        })
        .then((data) => setStory(data))
        .catch((error) => console.log(error))
    }, [id]);

  return (
    <div>
        {story ? 
          <div className="d-flex justify-content-center align-items-center">
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}> <i class="bi bi-arrow-left-circle" /> </Link>
            {/* <img className="vh-100" src={story.image} alt="story" /> */}
            <img className="vh-100" src={ story.image.startsWith('http') ? story.image : `http://localhost:3000${story.image}` } alt="story" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}> <i class="bi bi-arrow-right-circle" /> </Link>
          </div>         
          : 
          <div>Loading...</div>
        }
    </div>
  )
}

export default ViewStory