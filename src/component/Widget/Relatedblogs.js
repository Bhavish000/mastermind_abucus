import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { a } from 'react-router-dom';

const Relatedblogs = (props) => {
    const {Relatedblog} = props
    return (
        <>
            {Relatedblog.length < 0 ? 
        <div className="recent-posts-widget mb-50">
            <h3 className="widget-title">Related Blog</h3>
            { Relatedblog.map((item,index)=>(
                <div className="show-featured" key={index}>
                <div className="post-img">
                    <Link href={`/blog_detail/${item.blog_url}`}>
                        <Image
                            src={item.image_url}
                            alt="Mastermind Abacus"
                        //     width={500}
                        //  height={300}
                        />
                    </Link>
                </div>
                <div className="post-desc">
                    <Link href={`/blog_detail/${item.blog_url}`}>{item.subject}</Link>
                    <span className="date">
                        {item.blog_date ? <i className="fa fa-calendar"></i> :null}                        
                         {item.blog_date}
                    </span>
                </div>
            </div>
             ))}
         
             
             </div>
             :null}
             
             </>
    )
}

export default Relatedblogs;