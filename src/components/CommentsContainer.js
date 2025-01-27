import React from "react";

const commentsData = [
  {
    name: "Jayashree S",
    comment: "Very noce video",
    replies: [
      {
        name: "Rubashree",
        comment: "Amazing",
      },
    ],
  },
  {
    name: "Jayashree S",
    comment: "Very noce video",
    replies: [
      {
        name: "Rubashree",
        comment: "Amazing",
      },
    ],
  },
  {
    name: "Jayashree S",
    comment: "Very noce video",
    replies: [
      {
        name: "Rubashree",
        comment: "Amazing",
      },
    ],
  },
  {
    name: "Jayashree S",
    comment: "Very noce video",
    replies: [
      {
        name: "Rubashree",
        comment: "Amazing",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex bg-slate-200 shadow-lg">
      <img
        className="h-7"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return comment.map((comment, index) => (
    <div>
    <Comment data={comment} key={index} />
    <div className="pl-5 border border-l-black ml-5"> 
       <CommentList comment={comment.replies} />
    </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold"> Comments </h1>
      <CommentList comment={commentsData} />
    </div>
  );
};

export default CommentsContainer;
