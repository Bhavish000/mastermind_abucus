import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

function SingleTeam (props) {
    const { teamClass,image, Title, Designation } = props;
	return(
        <div className={teamClass ? teamClass : 'team-item'}>
            <Image 
                src={image} 
                alt={Title}
            />

            <div className="content-part">
                <h4 className="name">
                    <Link href='/team/team-single'>
                        {Title ? Title : 'Jhon Pedrocas'}
                    </Link>
                </h4>
                <span className="designation">{Designation ? Designation : 'Professor'}</span>
               
            </div>
        </div>
	)
}

export default SingleTeam