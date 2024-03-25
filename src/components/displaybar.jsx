import emailLogo from "../assets/email.svg"
import locationLogo from "../assets/location.svg"
import phoneLogo from "../assets/phone.svg" 
import { person,eduHandler ,expHandler} from "./data";

export default Displaybar;

function Displaybar(){
    return(
        <div className="displaybar">
            <div className="cv">
                <Header/>
                <EducationBlock/>
                <ExperienceBlock />
            </div>
        </div>
    );
}

function Header(){
    return (
        <div className="header">
            <h1 className="person-name">{person.name}</h1>
            <ul className="person-detail-list">
                <li className="person-detail-list-item">
                    <img src={emailLogo} alt="" />
                    <p>{person.email}</p>
                </li>
                <li className="person-detail-list-item">
                    <img src={phoneLogo} alt="" />
                    <p>{person.phone}</p>
                </li>
                <li className="person-detail-list-item">
                    <img src={locationLogo} alt="" />
                    <p>{person.location}</p>
                </li>
            </ul>
        </div>
    );
}

function EducationBlock(){

        const eduList = eduHandler.educationArr.map(data => 
            <div className="information" key={data.school}>
            <div className="left">
                <div className="date">{`${data.startDate} - ${data.endDate}`}</div>
                <div className="location">{data.location}</div>
            </div>
            <div className="right"> 
                <div className="school fw-bold">{data.school}</div>
                <div className="degree">{data.degree}</div>
            </div>
        </div>
            );

    return(
        <div className="displaybar-block">
            <h3 className="block-title">Education</h3>
            {eduList}
        </div>
    );
}


function ExperienceBlock(){
       
    const expList = expHandler.experienceArr.map(data => 
        <div className="information" key={data.company}>
        <div className="left">
            <div className="date">{`${data.startDate} - ${data.endDate}`}</div>
            <div className="location">{data.location}</div>
        </div>
        <div className="right"> 
            <div className="school fw-bold">{data.company}</div>
            <div className="position">{data.position}</div>
            <div className="degree">{data.description}</div>
        </div>
    </div>
        );

    return(
        <div className="displaybar-block">
            <h3 className="block-title">Experience</h3>
            {expList}
        </div>
    );
}