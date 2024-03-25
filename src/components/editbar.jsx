import { useState } from "react";
import Wrapper from "./wrapper";
import { person,educationArr,experienceArr, EducationInfo,eduHandler } from "./data";
import educationLogo from "../assets/education.svg";
import experienceLogo from "../assets/experience.svg";
import { v4 as uuidv4 } from 'uuid';

export default Editbar;


function Editbar({renderVar,setRender}){
    return(
        <div className="editbar">
            <PersonalDetail renderVar={renderVar} setRender={setRender} />
            <EducationDetail renderVar={renderVar} setRender={setRender}/>
            <ExperienceDetail/>
        </div>
    );
}


function PersonalDetail({renderVar,setRender}){
    const clickHandler = (e,type) => {
        person[type] = e.target.value;
        setRender(!renderVar);
    }
    return (
        <Wrapper>
            <form>
                <h2 className="heading-2">Personal Details</h2>
                <ul className="detail-list">
                     <li className="detail-list-item">
                        <label htmlFor="">Full Name</label>
                        <input type="text" onChange={ (e) => clickHandler(e,"name")} value={person["name"]} />
                    </li>
                     <li className="detail-list-item">
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={ (e) => clickHandler(e,"email")} />
                        </li>
                     <li className="detail-list-item">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" onChange={ (e) => clickHandler(e,"phone")}/>
                        </li>
                     <li className="detail-list-item">
                        <label htmlFor="">Address</label>
                        <input type="text" onChange={ (e) => clickHandler(e,"location")}/></li>
                </ul>
            </form>
        </Wrapper>
    )
}

function EducationDetail({renderVar,setRender}){
    const [expand,setExpand] = useState(false);
    const [add,setAdd] = useState(false);
    const [canExpand,setcanExpand] = useState(true);

    const detailList = eduHandler.educationArr.length !== 0 ?
    eduHandler.educationArr.map( data => 
        <EducationCard data={data} renderVar={renderVar} setRender={setRender} canExpand={canExpand} setcanExpand={setcanExpand} key={data.id}/>) : "";
    
    const addNew = () => {
        const newObj = eduHandler.returnObj();
        return(
            <EducationForm data={newObj} renderVar={renderVar} setRender={setRender} add={add} setAdd={setAdd}/>
        )
    }

    return (
        <Wrapper>
                <div className="editbar-menu" onClick={() => setExpand(!expand)}>
                    <img src={educationLogo} alt="" />
                    <h2 className="heading-2">Education </h2>
                </div>
                {
                    (expand&&add)? addNew(): ""
                }
                {
                    (expand && !add )? detailList: ""
                }
                <button className="add-new" 
               onClick={() => { setAdd(!add);
               eduHandler.increaseIndex()}
            }
               style={!expand || add ? {display:"none"}:{display:"block"}}>
                    <span className="bigger-plus">+</span> Education
                </button>
        </Wrapper>
    );
}

function EducationCard({data,canExpand,setcanExpand,renderVar,setRender}){
    const [formDisplay,setForDisplay] = useState(false);

    const formDisplayer = () => {
      const form =  canExpand && formDisplay ?  <EducationForm data={data} renderVar={renderVar} setRender={setRender} /> : "";
        return form;
    }

    return (
        <div className="card">
        <button className="card-header" 
        onClick={() => setForDisplay(!formDisplay)}>
            <h3 className="heading-3">{data.school}</h3>
            <img src="" alt="" />
        </button>
       {formDisplayer()}
    </div>
    );
}


function EducationForm({data,renderVar,setRender,add,setAdd}){
    
    const obj = eduHandler.findObj(data.id);

    const clickHandler = (e,type) => {
 
        switch(type){
            case "school" : obj.school = e.target.value;
            break;
            case "startDate" : obj.startDate = e.target.value;
            break;
            case "endDate" : obj.endDate = e.target.value;
            break;
            case "location" : obj.location = e.target.value;
            break;
            case "degree" : obj.degree = e.target.value;
            break;
        }


        setRender(!renderVar);
    }

    const saveHandler = (e) => {
        e.preventDefault();
        e.target.style.display = "none";
        add? setAdd(!add) : "";
    }

    const deleteHandler = (e) => {
        eduHandler.deleteObj(obj.id)
        console.log(eduHandler.educationArr)
        e.target.style.display = "none";
        setRender(!renderVar);
        add? setAdd(!add) : "";
    }

    return(
        <form onSubmit={saveHandler} >
        <ul className="detail-list">
            <li className="detail-list-item">
                <label htmlFor="">School</label>
                <input type="text" onChange={ (e) => clickHandler(e,"school")} value={obj.school} />
            </li>
            <li className="detail-list-item">
                <label htmlFor="">Degree</label>
                <input type="text" onChange={ (e) => clickHandler(e,"degree") } value={obj.degree}/>
            </li>
            <li className="detail-list-item">
                <label htmlFor="">Start Date</label>
                <input type="text"onChange={ (e) => clickHandler(e,"startDate")} value={obj.startDate}/>
            </li>
            <li className="detail-list-item">
                <label htmlFor="">End Date</label>
                <input type="text"onChange={ (e) => clickHandler(e,"endDate")} value={obj.endDate}/>
            </li>
            <li className="detail-list-item">
                <label htmlFor="">Location</label>
                <input type="text"onChange={ (e) => clickHandler(e,"location")} value={obj.location}/>
            </li>        
        </ul>
        <ul className="button-form-list">
                <button className="button-form delete" type="button" onClick={deleteHandler}>
                    Delete
                </button>
                <button className="button-form save" type="submit" >
                    <p>Save</p>
                </button>
        </ul>
    </form>
    );
}






function ExperienceDetail(){
    
    const [expand,setExpand] = useState(false);
    const [canExpand,setcanExpand] = useState(true); // common variable for cards 

    const experienceCards = experienceArr.map( element => 
        <ExperienceCard data={element} canExpand={canExpand} setcanExpand={setcanExpand} key={element.company}/>);

    return (
        <Wrapper>
                <div className="editbar-menu" onClick={() => {setExpand(!expand) ;setcanExpand(true)}}>
                    <img src={experienceLogo} alt="" />
                    <h2 className="heading-2">Experience </h2>
                    <div className={expand ? "arrow-head": "arrow-head down"}>{ expand ? "^": "^"}</div>
                </div>
                {
                    expand? experienceCards: ""
                }
                <button className="add-new" style={expand?{display:"block"}:{display:"none"}}><span className="bigger-plus">+  </span> Experience</button>
        </Wrapper>
    );
}

function ExperienceCard({data,canExpand,setcanExpand}){
    const [expand, setExpand] = useState(false);

    const expandHandler = () => {
        if(canExpand){
            setExpand(!expand);
            setcanExpand(!canExpand);
        } 
    }

    return (
        <div className="card" style={expand?{backgroundColor: "white"}:{}}>
        <button className="card-header" onClick={expandHandler} style={expand? {display:"none"}: {display:"flex"}}>
            <h3 className="heading-3">{data.company}</h3>
            <img src="" alt="" />
        </button>
        <form style={expand? {display:"block"}: {display:"none"}}>
            <ul className="detail-list">
                <li className="detail-list-item"><label htmlFor="">Company</label><input type="text" /></li>
                <li className="detail-list-item"><label htmlFor="">Position title</label><input type="text" /></li>
                <li className="detail-list-item"><label htmlFor="">Start Date</label><input type="text" /></li>
                <li className="detail-list-item"><label htmlFor="">End Date</label><input type="text" /></li>
                <li className="detail-list-item"><label htmlFor="">Location</label><input type="text" /></li>
                <li className="detail-list-item"><label htmlFor="">Description</label><textarea name="" id="" cols="20" rows="10"></textarea></li>
            </ul>
            <ul className="button-form-list">
                <button className="button-form delete">
                    Delete
                </button>
                <button className="button-form save">
                    <p>save</p>
                </button>
            </ul>
        </form>
    </div>
    );
}