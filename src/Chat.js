import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Chat.css";

function Chat() {
    const [seed, setSeed] = useState("");
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>

            </div>
            <div className="chat_body">

            </div>
            <div className="chat_footer">

            </div>
        </div>
    )
}

export default Chat
