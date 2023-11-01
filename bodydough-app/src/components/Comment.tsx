"use client"
import { useState } from "react";

interface CommentProps {
    onCommentChange : (newComment : string) => void;
}

const Comment : React.FC<CommentProps> = ({onCommentChange}) =>{
    const [comment,setComment] = useState<string>("");

    const handleCommentType = (newComment : string) =>{
        setComment(newComment);
        onCommentChange(newComment);
    };

    const handleCommentChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        handleCommentType(e.target.value);
    };

    return(
        <div className="w-60% mg-4 md:p-2 lg:p-6 xl:p-10 relative flex flex-col font-sriracha items-center justify-center rounded-lg bg-white">
            <span className="inline-flex items-baseline">
                <input className="self-center w-32 h-6  mx-2 rounded-md text-center" type="text" value={comment} onChange={handleCommentChange} />
            </span>
        </div>
    );
};

export default Comment;