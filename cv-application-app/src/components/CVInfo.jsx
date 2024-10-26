import React from "react";

function CVInfo({CVInfoItem,handleEdit,handleDelete}){
    return(
        <div>
            <div className="allinformation">
                <h1>CURRICULUM VITAE</h1>
                <div className="personalInformation">
                    <h2>Personal Information</h2>
                    <p><strong>FullName : </strong>{CVInfoItem.fname}</p>
                    <p><strong>Contact Email : </strong>{CVInfoItem.contactMail}</p>
                    <p><strong>Contact Phone :</strong> {CVInfoItem.contactPhone}</p>
                </div>
                <div className="educationalInformation">
                    <h2>Educational Information</h2>
                    <p><strong>School Name :</strong> {CVInfoItem.schoolname}</p>
                    <p><strong>Title of Study :</strong> {CVInfoItem.studytitle}</p>
                    <p><strong>Date of Study :</strong> {CVInfoItem.datestudy}</p>
                </div>
                <div className="workexperience">
                    <h2>Work Experience</h2>
                    <p><strong>Company Name :</strong> {CVInfoItem.companyname}</p>
                    <p><strong>Position Held :</strong> {CVInfoItem.title}</p>
                    <p><strong>Description of Work done :</strong> {CVInfoItem.desc}</p>
                    <p><strong>Start Date :</strong> {CVInfoItem.startdate}</p>
                    <p><strong>End Date :</strong> {CVInfoItem.enddate}</p>
                </div>
                <div className="btns">
                    <div>
                        <button onClick={()=>handleEdit(CVInfoItem)}>Edit</button>
                        <button onClick={()=>handleDelete(CVInfoItem)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVInfo