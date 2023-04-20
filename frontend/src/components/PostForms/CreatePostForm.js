import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreatePostForm = () => {
    const dispatch = useDispatch();

    return (
        <div className="create-post-form">
            <form className="post-form">
                <h2>Create a Post</h2>
                
            </form>
        </div>
    )
}