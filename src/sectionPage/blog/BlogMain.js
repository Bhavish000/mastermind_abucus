import SinglePostSix from '@/component/Blog/SinglePostSix';
import MetaWidget from '@/component/Widget/MetaWidget';
import RecentPost from '@/component/Widget/RecentPost';
import Relatedblogs from '@/component/Widget/Relatedblogs';
import React, { useEffect, useState } from 'react';

const BlogMain = () => {
    const [error, setError] = useState(null);
    const [BlogData, setBlogData] = useState('');
    const [searchValue, setsearchValue] = useState('')
    console.log(searchValue)

    const Handle_blog_api = async () => {
        try {
            const response = await fetch(`https://tt.mastermindschool.co.in/api/abacus_blog_page_list?search=${searchValue}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            setBlogData(data.data)

        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        Handle_blog_api();
    }, []);

    if (error) {
        return <div>
            Error: {error.message}
            {/* <ErrorContent /> */}
        </div>;
    }

    return (
        <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                <div className="col-lg-8 pr-50 md-pr-16">
                        <div className='row'>
                            {BlogData ?
                                BlogData.blog_list.map((item, index) => (
                                    <div className='col-lg-12 mb-70 md-mb-50' key={index}>
                                        <SinglePostSix
                                            blogImage={item.image_url}
                                            blogAuthor='Admin'
                                            blogCategory=''
                                            blogPublishedDate={item.blog_date}
                                            blogTitle={item.subject}
                                            blogDesc={item.shot_content}
                                            blogButtonClass='blog-button'
                                            blogButtonText='Continue Reading'
                                            BlogUrl={item.blog_url}
                                        />
                                    </div>
                                ))
                                : null}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 order-last">
                        <div className="widget-area">
                            <div className="search-widget mb-50">
                                <div className="search-wrap">
                                    <input type="search" placeholder="Searching..." className="search-input" onChange={(e) =>setsearchValue(e.target.value)}/>
                                    <button type="submit" onClick={Handle_blog_api} value="Search"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                             <RecentPost resentBlogs={BlogData.resent_blogs}/>
                            {BlogData.related_blogs ? <Relatedblogs Relatedblog={BlogData.related_blogs}/>: null} 
                             
                            {BlogData ?  <MetaWidget archivedBlogs ={BlogData.archived_blogs}/> : null}

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default BlogMain;