import React from 'react'
import {useNavigate} from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();

  return (

    <div className="m-3 position-fixed" >
        <div className="d-flex flex-column gap-3" >
            <img className="logo-text" src="src/assets/instagramText.png" alt="" />
            <div> <i className="bi bi-house-door" /> Home </div>
            <div> <i className="bi bi-search" /> Search </div>
            <div> <i className="bi bi-compass-fill" /> Explore </div>
            <div> <i className="bi bi-play-btn-fill" /> Reels </div>
            <div> <i className="bi bi-chat-left-dots" /> Messages </div>
            <div> <i className="bi bi-chat-left-heart-fill" /> Notifications </div>
            <div> <i className="bi bi-plus-square" /> Create </div>
            <div onClick={()=>{navigate('/profile')}} > <i className="bi bi-person-circle" /> Profile </div>
        </div>
        
        <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
            <div> <i className="bi bi-threads-fill" /> Threads </div>
            <div> <i className="bi bi-three-dots-vertical" /> More </div>
        </div>
    </div>

  );

}

export default Sidebar