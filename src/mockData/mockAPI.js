import { rooms, channelMessages } from "./mockData";

export const fetchRooms = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rooms);
        }, 500); // Simulate network delay
    });
};

export const fetchMessages = (roomId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(channelMessages[roomId] || []);
        }, 500); // Simulate network delay
    });
};

export const sendMessage = (roomId, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            channelMessages[roomId] = channelMessages[roomId] || [];
            channelMessages[roomId].push(message);
            resolve(message);
        }, 500); // Simulate network delay
    });
};
