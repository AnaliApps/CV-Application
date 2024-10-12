import { useState } from "react";
export default function GeneralInformation(){
    const [inputs,setInputs] = useState('');
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values =>({...values,[name]:value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="genInformation">
                <fieldset>
                    <legend>General Personal Information</legend>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your fullname.." 
                    value={inputs.name}
                    onChange={handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" value={inputs.email} onChange={handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone" placeholder="0700200100" value={inputs.phone} onChange={handleChange}/>
                </fieldset>
                
            </div>
            <div className="Education">
                <fieldset>
                    <legend>Educational Background</legend>
                    <label htmlFor="schoolname">School Name:</label>
                    <input type="text" name="schoolname" id="schoolname" placeholder="Enter your School name.." 
                    value={inputs.schoolname}
                    onChange={handleChange} />
                    <label htmlFor="studyTitle">Title of Study:</label>
                    <input type="text" name="studyTitle" id="studyTitle" placeholder="Enter course studied" value={inputs.studyTitle} onChange={handleChange} />
                    <label htmlFor="dateStudy">Date of Study:</label>
                    <input type="date" name="dateStudy" id="dateStudy" placeholder="0700200100" value={inputs.dateStudy} onChange={handleChange}/>
                </fieldset>
            </div>
            <div className="workexperience">
                <fieldset>
                    <legend>Work Experience</legend>
                    <label htmlFor="companyname">Company Name:</label>
                    <input type="text" name="companyname" id="companyname" placeholder="Enter your Company name.." 
                    value={inputs.companyname}
                    onChange={handleChange} />
                    <label htmlFor="positionTitle">Position Title:</label>
                    <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter the position you held.." 
                    value={inputs.positionTitle}
                    onChange={handleChange} />
                    <label htmlFor="responsibilityDesc">Reponsibility Description:</label>
                    <textarea name="responsibilityDesc" id="responsibilityDesc" value={inputs.responsibilityDesc} cols={20} rows={10} onChange={handleChange}></textarea>
                    <label htmlFor="dateWorkedFrom">Date From:</label>
                    <input type="date" name="dateWorkedFrom" id="dateWorkedFrom"  value={inputs.dateWorked} onChange={handleChange}/> 
                    <label htmlFor="dateWorkedTo">Date To:</label>
                    <input type="date" name="dateWorkedTo" id="dateWorkedTo"  value={inputs.dateWorked} onChange={handleChange}/>      
                </fieldset>
            </div>
            <input type="submit"/>
        </form>
    )
}