import React, { useEffect, useState } from "react";
import s from "./Chat.module.scss";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useParams } from "react-router-dom";
import { fetchMessages, sendMessage } from "../../mockData/mockAPI";
import { rooms } from "../../mockData/mockData";

function Chat({ user }) {
    const { roomId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            setChannel(rooms[roomId - 1]);
            fetchMessages(roomId).then((msgs) => {
                setMessages(msgs);
            });
        }
    }, [roomId]);

    const handleSendMessage = (input) => {
        const newMessage = {
            user: user.name,
            message: input,
            timestamp: new Date().toISOString(),
            userImage: user.photoURL,
        };

        sendMessage(roomId, newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.channel}>
                    <div className={s.channelName}>
                        # {channel && channel.name}
                    </div>
                    <div className={s.channelInfo}>
                        Company-wide announcements and work based matters
                    </div>
                </div>
                <div className={s.channelDetails}>
                    <div>Details</div>
                    <div className={s.info}>
                        <InfoOutlinedIcon />
                    </div>
                </div>
            </div>
            <div className={s.messageContainer}>
                {messages &&
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            key={index}
                            text={data.message}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))}
            </div>
            <ChatInput handleSendMessage={handleSendMessage} />
        </div>
    );
}

export default Chat;
