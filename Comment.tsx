//Properties of Comment have not changed
'use client;'

import { useState } from "react";
//Pass the name and avatarUrl properties to UserInfo and then to Avatar
export default function Comment({name, avatarUrl, text, date}:
  {name:string; avatarUrl: string; text: string; date: string}) {
    return (    
    <div>
        <UserInfo name={name} avatarUrl={avatarUrl} />
      <div>
        {text}
      </div>
      <div>
        {date}
    </div>
    
    </div>
    );
}

function Avatar({name, avatarUrl}:
  {name:string; avatarUrl: string}) {
  return (
  <div>
      <img
        src={avatarUrl}
        alt={name}
      />
  </div>
  );
}

/* UserInfo has a nested Avatar component*/
function UserInfo({name, avatarUrl}:
  {name:string; avatarUrl: string}) {
  return (
  <div>
      <Avatar avatarUrl={avatarUrl} name={name} />
      <div>
         {name}
      </div>
  </div>
  );
}
function LikeButton({initial_likes}: {initial_likes:number}) {
  const [count, setCount] = useState(0);
  function handleClick() { 
  //code here 
    setCount(count - 1)
    console.log(count);
  } 
  return ( 
  //code here to display button and number of likes 
    <div>
        <button onClick={handleClick}>
          Like
        </button>
      <p>{count}</p>
    </div>
  )
}
function DislikeButton({initial_likes}: {initial_likes:number}) {
  const [count, setCount] = useState(initial_likes);
  function handleClick() { 
  //code here 
    setCount(count - 1)
    console.log(count);
  } 
  return ( 
  //code here to display button and number of likes 
    <div>
        <button onClick={handleClick}>
          Dislike
        </button>
      <p>{count}</p>
    </div>
  )
}


/* This is the author data you'll need to create the Comment element 
   var authorObj = {name: "Robo",
        avatarUrl:"https://gravatar.com/avatar/748506960d38cfe99fbe6819b55b916e?s=200&d=robohash&r=x"
   }
*/

