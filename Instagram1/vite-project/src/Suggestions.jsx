import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function Suggestions() {

const [profile, setProfile] = useState(null);
const [suggestions, setSuggestions] = useState([]);  //empty list state variable

useEffect(
  () => {
    fetch('http://localhost:3000/profile')
    .then((data) => data.json())
    .then((data) => setProfile(data))
    .catch((error) => {console.log(error)})

    fetch('http://localhost:3000/suggestions')
    .then((data) => data.json())
    .then((data) => setSuggestions(data))
    .catch((error) => {console.log(error)})
  } , []
);

const handleFollow = async (id, username) => {
  axios.post('http://localhost:3000/followers',{"id" : id, "username":username})
  .then(alert("followed"))
  .catch(error => console.log(error))
}
//unneccessary to use await function here

  return (

    <div>

      <div className="suggestions w-75 m-4">

        { profile ? (
          <div className="d-flex">
            <img className="rounded-circle dp" src={`http://localhost:3000${profile.profilePic}`} alt="profile pic" />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div> )
          :
          ( <div> <p>Loading.....</p> </div> )
        }

        <div className="d-flex">
          <p>Suggestions</p>
          <b className="ms-auto">See All</b>
        </div>

        { //ternary operator
          suggestions.length > 0 ? (
            <div>
              {suggestions.map((suggestion) => (
                  <div className="my-2" key={suggestion.id}>
                    <div className="d-flex">
                      <img className="rounded-circle dp" src={`http://localhost:3000${suggestion.profilePic}`} alt="profile pic" />
                      <h5>{suggestion.username}</h5>
                      <button className="btn btn-outline-primary btn-sm ms-auto" onClick={()=>handleFollow(suggestion.id, suggestion.username)}>Follow</button>
                    </div>
                  </div>
                )
              )
            }
          </div>
        ) 
        : 
        (
          <div>
            Loading......
          </div>
        )
      }

      </div>

    </div>  

  );
}

export default Suggestions