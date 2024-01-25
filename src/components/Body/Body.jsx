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

                <h3>2. How useState work?</h3>
                <p>useState takes two value. First one is state variable for it's argument and the second value set the state.</p>

                <h3>3. What is the uses of useEffect without data load?</h3>
                <p>Validating input field,live filtering, update paragraph list on fetched API data update etc</p>

                <h3>4. How does react work?</h3>
                <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
            </div>
        </div>
    );
};

export default Body;