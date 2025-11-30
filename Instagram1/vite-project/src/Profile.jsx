import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

function Profile() {

const [profile, setProfile] = useState(null);
const [followers, setFollowers] = useState([]);
const [unfollowed, setUnfollowed] = useState(0);

function onChangeHandler(event){
    setProfile(prev => ({
        ...prev,
        [event.target.name] : event.target.value
    }));
}

const handleUpdate = async () => {
    axios.put('http://localhost:3000/profile', profile)
    .then(console.log("updated...."))
    .catch(error => console.log(error))
}

const handleUnfollow = async (id) => {
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(alert("unfollowed"))
    .then(setUnfollowed(!unfollowed))
    .catch(error => console.log(error))
}

useEffect(() => {
    axios.get('http://localhost:3000/profile')
    .then((data) => setProfile(data.data))
    .catch(error => console.log(error))

    axios.get('http://localhost:3000/followers')
    .then((data) => setFollowers(data.data))
    .catch(error => console.log(error))
    },
[unfollowed]);

  return (
    <div className="m-5">
        {profile ? (
                <div>
                    <img className="profile rounded-circle" src={`http://localhost:3000${profile.profilePic}`} alt="" />
                    <h5>{profile.username}</h5>

                    <input className="form-control my-4" type="text" value={profile.username} name="username" 
                        onChange={onChangeHandler}/>
                    <input className="form-control" type="text" value={profile.profilePic} name="profilePic" 
                        onChange={onChangeHandler}/>

                    <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>

                </div>
            ) 
            :
            (
                <div>
                    <p>Loading......</p>
                </div>
            )
            } 

        {followers.length >0 ? (
            followers.map(follower => (
                <div key={follower.id} className="d-flex my-2">
                    {follower.username}
                    <button className="btn btn-outline-secondary btn-sm ms-auto" onClick={() => handleUnfollow(follower.id)} >Unfollow</button>
                </div>
                )
            )
        ) 
        : 
        (
            <div>
                <p>Loading........</p>
            </div>
        )
        }
           

    </div>
  );
    
}

export default Profile