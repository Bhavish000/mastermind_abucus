import Link from 'next/link';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const MetaWidget = (props) => {
    const { archivedBlogs } = props
    return (
        <div className="recent-posts mb-50" >
            <h3 className="widget-title">Archives</h3>
           {
            archivedBlogs ? 
            archivedBlogs.map((item,index)=>(
                <Accordion style={{marginBottom:5}} key={index}>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header><div style={{fontWeight:"500"}}>{item.monthname} {item.month_id}</div> </Accordion.Header>
                    {item.blog_list.map((item,index)=>(
                       <Accordion.Body key={index}>                     
                        <Link href={`/blog_detail/${item.blog_url}`} className='popup-videos primary-color' >* {item.subject} </Link>
                       </Accordion.Body>
                    ))}
                    
                </Accordion.Item>
            </Accordion>
           )):null
           }
         
           
        </div>
    )
}

export default MetaWidget;