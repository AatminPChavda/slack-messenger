import React, { useState } from "react";
import s from "./ChatInput.module.scss";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ handleSendMessage }) {
    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if (!input) return;
        handleSendMessage(input);
        setInput("");
    };

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <form>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        value={input}
                        placeholder="Message here ..."
                    />
                    <button
                        className={s.sendButton}
                        type="submit"
                        onClick={send}
                    >
                        <div className={s.send}>
                            <SendIcon />
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatInput;
