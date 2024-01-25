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
        </div>
    );
};

export default Body;