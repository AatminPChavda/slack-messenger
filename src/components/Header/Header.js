import React from "react";
import s from "./Header.module.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header({ user, signOut }) {
    return (
        <div className={s.container}>
            <div className={s.main}>
                <AccessTimeIcon />
                <div className={s.searchContainer}>
                    <div className={s.search}>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <HelpOutlineIcon />
            </div>
            <div className={s.userContainer}>
                <div className={s.name}>{user.name}</div>
                <div className={s.userImage} onClick={signOut}>
                    <img
                        src={
                            user.photoURL
                                ? user.photoURL
                                : "https://i.imgur.com/6VBx3io.png"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
