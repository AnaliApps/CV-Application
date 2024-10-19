import { useState } from "react";

export default function GeneralInformation(){
    // const [inputs,setInputs] = useState({});
    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [schoolName,setSchoolName] = useState('')
    const [studyTitle,setStudyTitle] = useState('')
    const [dateStudy,setdateStudy] = useState('')
    const [companyName,setCompanyName] = useState('')
    const [positionTitle,setPositionTitle] = useState('')
    const [responsibilityDesc,setResponsibilityDesc] = useState('')
    const [dateWorkedFrom,setDateWorkedFrom] = useState('')
    const [dateWorkedTo,setDateWorkedTo] = useState('')
    const [info,setInfo] = useState([])
    // const handleChange = (e) =>{
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setInputs(values =>({...values,[name]:value}))
    //     console.log(inputs)
    // }
    const handleSubmit = () =>{
        console.log('Submitting')
        let newInfo = {
            fname:fullName,
            email:email,
            phone:phone,
            schoolname:schoolName,
            studyTitle:studyTitle,
            dateStudy:dateStudy,
            companyname:companyName,
            positionTitle:positionTitle,
            responsibilityDesc:responsibilityDesc,
            dateWorkedFrom:dateWorkedFrom,
            dateWorkedTo:dateWorkedTo
        }
        let updatedInputs = [...info]
        updatedInputs.push(newInfo)
        setInfo(updatedInputs)
        console.log(info)

    }
    return (
        <>
            <div>
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
            <button onClick={handleSubmit}>Submit</button>
        </div>

        <div>
            <header>
            <h1>CV APPLICATION</h1>
           { info.map((item,index)=>{
            return (
                <div className="mainContent" key={index}>
                    <div className="personalInfoSec">
                        <h3>Personal Information</h3>
                        <p>FullName : {item.fname}</p>
                        <p>Email  : {item.email}</p>
                        <p>Phone  : {item.phone}</p>
                    </div>
                    <div className="EducationalBackground">
                        <h3>Educational Background</h3>
                        <p>School Name : {item.schoolname}</p>
                        <p>Title of Study : {item.studyTitle}</p>
                        <p>Date of Study : {item.dateStudy}</p>
                    </div>
                    <div className="WorkExperience">
                        <h3>Work Experience</h3>
                        <p>Company Name : {item.companyname}</p>
                        <p>Position Held : {item.positionTitle}</p>
                        <p>Responsibilities: {item.responsibilityDesc}</p>
                        <p>Start Date : {item.dateWorkedFrom}</p>
                        <p>End Date : {item.dateWorkedTo}</p>
                    </div>
                </div>
            )
           })}
            </header>
        </div>
        </>
        
    )
}