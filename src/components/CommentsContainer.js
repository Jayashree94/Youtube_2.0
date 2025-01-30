import React from "react";

const commentsData = [
  {
    name: "Jayashree S",
    text: "Very nice video...",
    replies: [
      {
        name: "Rubashree",
        text: "Amazing...",
        replies:[{
            name: "Vihaan",
            text:"Acha acha! bahhot acha",
        replies:[]}
        ]

      },
    ],
  },
  {
    name: "Jayashree S",
    text: "Very nice video!!",
    replies: [
      {
        name: "Rubashree",
        text: "Amazing vdeo",
        replies:[]
      },
    ],
  },
  {
    name: "Jayashree S",
    text: "Very nice video :)",
    replies: [
      {
        name: "Rubashree",
        text: "Amazing :)",
        replies:[]
      },
    ],
  },
  {
    name: "Jayashree S",
    text: "Very nice video///",
    replies: [
      {
        name: "Rubashree",
        text: "Amazing.. coool",
        replies:[]
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-slate-100 shadow-lg p-2 rounded-sm my-3">
      <img
        className="h-7"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, text) => (
    <div>
      <Comment key={text} data={comment}  />
      <div className="pl-5 border border-l-black ml-5">
      <CommentList comments={comment.replies} />
      
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold"> Comments </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
