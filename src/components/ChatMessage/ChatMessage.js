import React from 'react'
import s from './ChatMessage.module.scss'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <div className={s.container}>
            <div className={s.userAvatar}>
                <img src={image} />
            </div>
            <div className={s.messageContent}>
                <span className={s.name}>
                    {name}
                    <span>{new Date(timestamp).toLocaleString()}</span>
                </span>
                <span className={s.text}>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default ChatMessage

