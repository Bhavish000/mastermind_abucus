import Image from "next/image";
import Link from "next/link";

const SinglePostThree = (props) => {
    const { blogClass, blogImage, blogTitle, contentClass, blogDesc, btnClass, blogButtonText, blogurl } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item '}>
            <div className="image-part">
                <Link href={`/blog_detail/${blogurl}`}>
                    <Image
                        src={blogImage}
                        alt={blogTitle}
                        // width={500}
                        // height={300}
                    />
                </Link>
            </div>
            <div className={contentClass ? contentClass : 'blog-content'}>
                {/* <ul className="blog-meta">
                    <li className="admin"><i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'admin'}</li>
                    <li className="date"><i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'June 15, 2019'}</li>
                </ul> */}
                <h3 className="title">
                    <Link href={`/blog_detail/${blogurl}`}>
                        {blogTitle ? blogTitle : 'Open Source Job Report Show More Openings Fewer '}
                    </Link>
                </h3>
                <div className="desc">{blogDesc ? blogDesc : 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...'}
                    <Link href={`/blog_detail/${blogurl}`} className='title-change'> Read More..</Link>
                </div>
                {/* <ul className="blog-bottom">
                   
                    <li className="btn-part">
                        <Link to={`/blog_detail/${blogurl}`} className={btnClass ? btnClass : 'readon-arrow'}>
                            {blogButtonText ? blogButtonText : 'Read More'} 
                            Read More
                        </Link>
                    </li>
                </ul> */}
            </div>
        </div>

    )
}

export default SinglePostThree