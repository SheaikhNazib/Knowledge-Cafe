import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    const bookMarkIcon = <FontAwesomeIcon icon={faBookmark} />;
    const { id, authorName, blogTitle, coverImg, authorImg, readTime, publishDate } = props.blog;

    const handleBookmark = props.handleBookmark;
    const markAsRead = props.markAsRead;
    // console.log(props.blog.readTime)

    return (
        <div className='blog'>
            <img className='cover-img' src={coverImg} alt=""/>

            <div className='author-container'>

                <div className='author-info'>
                    <img className='author-img' src={authorImg} alt="" />
                    <div>
                        <p className='author-name'>{authorName}</p>
                        <p className='publish-date'>{publishDate}</p>
                    </div>
                </div>

                <p className='read-time'>{readTime} min read
                    <button onClick={() => handleBookmark(props.blog)} className='btn-bookmark'>{bookMarkIcon}</button>
                </p>

            </div>

            <p className='blog-title'>{blogTitle}</p>
            <p className='hash-tag'>#beginners #programming</p>

            <button onClick={() => markAsRead(props.blog.readTime)} className='mark-as'>Mark as read</button>

            <hr />

        </div>
    );
};

export default Blog;