import React from "react";

function CVInfo({CVInfoItem,handleEdit,handleDelete}){
    return(
        <div>
            <div className="allinformation">
                <div className="personalInformation">
                    <h1>Personal Information</h1>
                    <h2>FullName: {CVInfoItem.fname}</h2>
                    <h3>Contact Email: {CVInfoItem.contactMail}</h3>
                    <h3>Contact Phone: {CVInfoItem.contactPhone}</h3>
                </div>
                <div className="educationalInformation">
                    <h1>Educational Information</h1>
                    <p>School Name: {CVInfoItem.schoolname}</p>
                    <p>Title of Study: {CVInfoItem.studytitle}</p>
                    <p>Date of Study: {CVInfoItem.datestudy}</p>
                </div>
                <div className="workexperience">
                    <h1>Work Experience</h1>
                    <p>Company Name: {CVInfoItem.companyname}</p>
                    <p>Position Held: {CVInfoItem.title}</p>
                    <p>Description of Work done: {CVInfoItem.desc}</p>
                    <p>Start Date: {CVInfoItem.startdate}</p>
                    <p>End Date: {CVInfoItem.enddate}</p>
                </div>
                <div>
                    <button onClick={()=>handleEdit(CVInfoItem)}>Edit</button>
                    <button onClick={()=>handleDelete(CVInfoItem)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CVInfo