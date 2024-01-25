import React, { useEffect, useState } from 'react';
import './Body.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Body = () => {
    const [blogs, setBlogs] = useState([]);
    const [markedBlog, setMarkedBlog] = useState([]);
    const [spentTime, setSpentTime] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (blog) => {
        const newMarkedBlog = [...markedBlog, blog];
        setMarkedBlog(newMarkedBlog);
    }

    const markAsRead = (time) => {
        const newSpentTime = [...spentTime, time];
        setSpentTime(newSpentTime);
    }

    return (
        <div className='body-container'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        markAsRead={markAsRead}>
                    </Blog>)
                }
            </div>
            <Sidebar markedBlog={markedBlog} spentTime={spentTime}></Sidebar>
            <div>
                <h3>1. What is the difference between props and state?</h3>
                <p>Props is used for sending data one component to another component. State is used for local data storage of a component</p>

                
            </div>
        </div>
    );
};

export default Body;