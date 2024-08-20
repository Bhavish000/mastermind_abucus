
// import Image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const SinglePostSix = (props) => {
    const { blogClass, blogImage, blogTitle, blogAuthor, blogPublishedDate, blogCategory, blogDesc, blogButtonClass, blogButtonText ,BlogUrl} = props;
    return (
        <div className= 'blog-item ' >
            <div className="blog-img d-flex justify-center">
                <Link href={`/blog_detail/${BlogUrl}`}>
                    <Image
                        src={blogImage}
                        alt={blogTitle}
                         width={500}
                         height={300}
                    />
                </Link>
            </div>
            <div className="blog-content">
                <h2 className="blog-title">
                    <Link href={`/blog_detail/${BlogUrl}`}>
                        {blogTitle ? blogTitle : 'Loading...'}
                    </Link>
                </h2>
                <div className="blog-meta">
                    <ul className="btm-cate">
                        <li>
                            <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : ''}
                            </div>
                        </li>
                        <li>
                            <div className="author">
                                <i className="fa fa-user-o"></i> {blogAuthor ? blogAuthor : ''}
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="blog-desc">
                    {blogDesc ? blogDesc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '}
                </div>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link href={`/blog_detail/${BlogUrl}`}  className="blog-btn">
                        {blogButtonText ? blogButtonText : 'Continue Reading'}
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePostSix