import React from "react";

function AddCVForm({fullName,setFullName,email,setEmail,phone,setPhone,schoolName,setSchoolName,studyTitle,setStudyTitle,dateStudy,setdateStudy,companyName,setCompanyName,positionTitle,setPositionTitle,responsibilityDesc,setResponsibilityDesc,dateWorkedFrom,setDateWorkedFrom,dateWorkedTo,setDateWorkedTo,handleSubmit}){
    return (
        <form onSubmit={handleSubmit}>
            <div className="genInformation">
                <fieldset>
                    <legend>General Personal Information</legend>
                    <label htmlFor="fname">Name:</label>
                    <input type="text" name="fname" id="fname" placeholder="Enter your fullname.." 
                    value={fullName}
                    onChange={(e) => {setFullName(e.target.value)}} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone" placeholder="0700200100" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </fieldset>
                
            </div>
            <div className="Education">
                <fieldset>
                    <legend>Educational Background</legend>
                    <label htmlFor="schoolname">School Name:</label>
                    <input type="text" name="schoolname" id="schoolname" placeholder="Enter your School name.." 
                    value={schoolName}
                    onChange={(e)=>setSchoolName(e.target.value)} />
                    <label htmlFor="studyTitle">Title of Study:</label>
                    <input type="text" name="studyTitle" id="studyTitle" placeholder="Enter course studied" value={studyTitle} onChange={(e)=>setStudyTitle(e.target.value)} />
                    <label htmlFor="dateStudy">Date of Study:</label>
                    <input type="date" name="dateStudy" id="dateStudy" placeholder="0700200100" value={dateStudy} onChange={(e)=>setdateStudy(e.target.value)}/>
                </fieldset>
            </div>
            <div className="workexperience">
                <fieldset>
                    <legend>Work Experience</legend>
                    <label htmlFor="companyname">Company Name:</label>
                    <input type="text" name="companyname" id="companyname" placeholder="Enter your Company name.." 
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)} />
                    <label htmlFor="positionTitle">Position Title:</label>
                    <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter the position you held.." 
                    value={positionTitle}
                    onChange={(e)=>setPositionTitle(e.target.value)} />
                    <label htmlFor="responsibilityDesc">Reponsibility Description:</label>
                    <textarea name="responsibilityDesc" id="responsibilityDesc" value={responsibilityDesc} cols={20} rows={10} onChange={(e)=>setResponsibilityDesc(e.target.value)}></textarea>
                    <label htmlFor="dateWorkedFrom">Date From:</label>
                    <input type="date" name="dateWorkedFrom" id="dateWorkedFrom"  value={dateWorkedFrom} onChange={(e)=>setDateWorkedFrom(e.target.value)}/> 
                    <label htmlFor="dateWorkedTo">Date To:</label>
                    <input type="date" name="dateWorkedTo" id="dateWorkedTo"  value={dateWorkedTo} onChange={(e)=>setDateWorkedTo(e.target.value)}/>      
                </fieldset>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddCVForm;