import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const markedBlog = props.markedBlog;
    const readTime = props.spentTime;
    console.log(readTime);


    let bookmarked = '';
    for (const spentTime of markedBlog) {
        bookmarked += spentTime.blogTitle + '\n' + '\n';
    }
    let totalTime = 0;
    for (const totalReadTime of readTime) {
        totalTime += totalReadTime;
        console.log(totalTime);
    }

    return (
        <div className='sidebar'>
            <div className='spent-time-container'>
                <p className='spent-time'>Spent time on read : {totalTime} min</p>
            </div>

            <div className='bookmark-container'>
                <p className='bookmarked-heading'>Bookmarked blogs:{markedBlog.length}</p>

                <div className='bookmarked-title-container' style={{ whiteSpace: 'pre-line' }}>
                    <p className='bookmarked-title'>{bookmarked}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
