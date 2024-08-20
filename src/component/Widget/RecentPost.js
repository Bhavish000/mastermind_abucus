import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { a } from 'react-router-dom';

const RecentPost = (props) => {
    const {resentBlogs} = props
    
    return (
        <div className="recent-posts-widget mb-50">
            <h3 className="widget-title">Recent Posts</h3>
            {resentBlogs ? 
             resentBlogs.map((item,index)=>(
                <div className="show-featured" key={index}>
                <div className="post-img">
                    <Link href={`/blog_detail/${item.blog_url}`}>
                        <Image
                            src={item.image_url}
                            alt="Masternind Abacus"
                            width={500}
                         height={300}
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href={`/blog_detail/${item.blog_url}`}>{item.subject}</Link>
                    <span className="date">
                        <i className="fa fa-calendar"></i>
                         {item.blog_date}
                    </span>
                </div>
            </div>
             ))
         
            :null}
         
        </div>
    )
}

export default RecentPost;