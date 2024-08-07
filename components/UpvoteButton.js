'use client'
import { FaCaretUp } from "react-icons/fa";
import { useState } from 'react';
import styles from './UpvoteButton.css'

export default function UpvoteButton() {
    const [isUpvoted, setIsUpvoted] = useState(0);
    const handleClick = () => {
        setIsUpvoted(isUpvoted + 1);
        alert(`Upvoted! Current count: ${isUpvoted + 1}`);
    };
    return (
        <div >
            <button type="button"
                className="cursor-pointer text-white bg-orangee text-white font-bold p-5 md:mt-14 mt-10 rounded"
                onClick={handleClick}
            >
                <pre className="flex uppercase tracking-widest"> <FaCaretUp className=" text-2xl flex " />upvote : {isUpvoted}</pre>
            </button>
        </div>
    );
};



