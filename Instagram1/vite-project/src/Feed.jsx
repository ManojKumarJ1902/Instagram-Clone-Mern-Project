import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

/*
divided into 2 sections 
1)stories - top section
2) posts - mid section - bottom
*/

function Feed() {
  return (
    <div>
        <div> <Stories /> </div>
        <div> <Posts /> </div>
    </div>
  );
}

export default Feed