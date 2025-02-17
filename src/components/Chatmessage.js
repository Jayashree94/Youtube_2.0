import React from "react";

export const Chatmessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        className="h-7"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <span className="font-bold px-2 py-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};
