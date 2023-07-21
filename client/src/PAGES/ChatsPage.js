import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {


  return (
    <div style={{height:"100vh"}}>
        <PrettyChatWindow 
                projectId='9b421d4a-6956-4029-8dc0-168d584fe4fc'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:"100%"}}
        />
    </div>
  )
}

export default ChatsPage