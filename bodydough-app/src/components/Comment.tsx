"use client"
import { useState } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


interface CommentProps {
    onCommentChange : (newComment : string) => void;
}

const Comment : React.FC<CommentProps> = ({onCommentChange}) =>{
    const [comment,setComment] = useState<string>("");

    const handleCommentType = (newComment : string) =>{
        setComment(newComment);
        onCommentChange(newComment);
    };

    const handleCommentChange = (e : any) => {
        handleCommentType(e.target.value);
    };

    return(
        <div  className="relative flex flex-col font-ktd items-center justify-center rounded-lg bg-white"> 
            <span className="flex items-baseline" >
                <TextareaAutosize aria-label="comment" minRows={3} placeholder="add your comment" 
                    className="p-5" onChange={handleCommentChange}/>
            </span>   
        </div>
    );
};

export default Comment;

//<input className="self-center w-32 h-6  mx-2 rounded-md text-center" type="text" value={comment} onChange={handleCommentChange} />
            