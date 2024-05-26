import React from "react";
import s from "./Sidebar.module.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
    const navigate = useNavigate();

    const goToChannel = (id) => {
        if (id) {
            navigate(`/room/${id}`);
        }
    };

    return (
        <div className={s.container}>
            <div className={s.workspaceContainer}>
                <div className={s.name}>TypeFace</div>
                <div className={s.newMessage}>
                    <AddCircleOutlineIcon />
                </div>
            </div>
            <div className={s.mainChannels}>
                {sidebarItemsData.map((item, index) => (
                    <div key={index} className={s.mainChannelItem}>
                        {item.icon}
                        {item.text}
                    </div>
                ))}
            </div>
            <div className={s.channelsContainer}>
                <div className={s.newChannelContainer}>
                    <div>Channels</div>
                    <AddIcon />
                </div>
                <div className={s.channelsList}>
                    {props.rooms.map((item) => (
                        <div
                            key={item.id}
                            className={s.channel}
                            onClick={() => goToChannel(item.id)}
                        >
                            # {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
