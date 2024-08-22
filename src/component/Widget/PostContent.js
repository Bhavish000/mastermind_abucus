import React, { useEffect, useState } from 'react';
import ErrorContent from '../Error';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

const PostContent = ({ }) => {
    const [Blog_detailData, setBlog_detailData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [paragraphs, setparagraphs] = useState('');
    const [error, setError] = useState(null);

    const { blogname } = useParams(); 
    // console.log(blogname);
    const IdBeforeSlash = blogname.split("/")[0];
    // console.log(IdBeforeSlash);

    const Handle_Blog_detail_API = async () => {
        try {
            const response = await fetch(`https://tt.mastermindschool.co.in/api/abacus_blog_detail?blog_id=${IdBeforeSlash}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            // console.log(result.data)
            setBlog_detailData(result.data)
            const paragraph = result.data.blog_detail.shot_content.split('\n').filter(paragraph => paragraph.trim() !== '');
            setparagraphs(paragraph)
        } catch (error) {
            setError(error)
        }
    };


    useEffect(() => {
        Handle_Blog_detail_API();
    }, []);

    if (error) {
        return <div>
            Error: {error.message}
            <ErrorContent />
        </div>;
    }
    return (
        <div className="blog-deatails">
            <div className="bs-img">
                {Blog_detailData ? <Image src={Blog_detailData.blog_detail.image_url} alt="Post Image"  /> : null}
            </div>
            {Blog_detailData ? <h2 className="title mb-0 mt-20">{Blog_detailData.blog_detail.subject}</h2> : null}
            <div className="blog-full mt-0">
                <ul className="single-post-meta">
                    <li>
                        {Blog_detailData ? <span className="p-date"> <i className="fa fa-calendar-check-o"></i> {Blog_detailData.blog_detail.blog_date} </span> : null}
                    </li>
                    <li>
                        <span className="p-date"> <i className="fa fa-user-o"></i> Admin </span>
                    </li>
                    <li className="Post-cate">
                        <div className="tag-line">
                            <i className="fa fa-book"></i>
                            <Link href="/blog">Strategy</Link>
                        </div>
                    </li>
                </ul>
                {paragraphs ?
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <div key={index}>
                                {index % 2 === 0 ? <h2 className="sm-title">{paragraph.trim()}</h2> : 
                                <div className="blog-desc">
                                    <p>
                                        {paragraph.trim()}
                                    </p>
                                </div>}
                            </div>
                        ))}
                    </div>
                    : null
                }

                
            </div>
        </div>
    )
}

export default PostContent;