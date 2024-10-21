// import { useState } from "react";

// export default function GeneralInformation(){
//     // const [inputs,setInputs] = useState({});
    
//     const [currentEdit,setCurrentEdit] = useState('')
//     const [currentEditedItem,setCurrentEditedItem] = useState('')

//     const handleUpdateFullName = (value) => {
//         setCurrentEditedItem((prev) =>{
//             return {...prev,fname:value}
//         })
//     }
    
//     const handleUpdateEmail = (value) => {
//         setCurrentEditedItem((prev)=>{
//             return {...prev,email:value}
//         })
//     }
//     const handleUpdatePhone = (value) => {
//         setCurrentEditedItem((prev) => {
//             return {...prev,phone:value}
//         })
//     }
//     const handleUpdateSchoolName = (value) =>{
//         setCurrentEditedItem((prev) => {
//             return {...prev,schoolname:value}
//         })
//     }
//     const handleUpdateStudyTitle = (value) => {
//         setCurrentEditedItem((prev) => {
//             return {...prev,studyTitle:value}
//         })
//     }
//     const handleUpdateDateStudy = (value) => {
//         setCurrentEditedItem((prev) => {
//             return {...prev, dateStudy:value}
//         })
//     }
//     const handleUpdateCompanyName = (value) =>{
//         setCurrentEditedItem((prev)=>{
//             return {...prev, companyName:value}
//         })
//     }
//     const handlePositionTitle = (value) =>{
//         setCurrentEditedItem((prev)=>{
//             return {...prev,positionTitle:value}
//         })
//     }
//     const handleUpdateResponsibilityDesc = (value) =>{
//         setCurrentEditedItem((prev)=>{
//             return {...prev,responsibilityDesc:value}
//         })
//     }
//     const handleUpdateDateWorkedFrom = (value) =>{
//         setCurrentEditedItem((prev) => {
//             return {...prev, dateWorkedFrom:value}
//         })
//     }
//     const handleUpdateDateWorkedTo = (value) =>{
//         setCurrentEditedItem((prev) => {
//             return {...prev,dateWorkedTo:value}
//         })
//     }

//     const handleEdit = (index,item)=>{
//         setCurrentEdit(index)
//         setCurrentEditedItem(item)
//         console.log(`CurrentEdit ${currentEdit}`)
//     }

//     const handleUpdate = () =>{
//         let previous = [...info]
//         previous[currentEdit] =  currentEditedItem
//         setInfo(previous)
//         setCurrentEdit("")
//     }
//     const handleSubmit = () =>{
//         console.log('Submitting')
//         let newInfo = {
//             fname:fullName,
//             email:email,
//             phone:phone,
//             schoolname:schoolName,
//             studyTitle:studyTitle,
//             dateStudy:dateStudy,
//             companyname:companyName,
//             positionTitle:positionTitle,
//             responsibilityDesc:responsibilityDesc,
//             dateWorkedFrom:dateWorkedFrom,
//             dateWorkedTo:dateWorkedTo
//         }
//         let updatedInputs = [...info]
//         updatedInputs.push(newInfo)
//         setInfo(updatedInputs)
//         console.log(info)

//     }
//     return (
//         <>
//             <div>
            
//         </div>

//         <div>
//             <header>
//             <h1>CV APPLICATION</h1>
//            { info.map((item,index)=>{
//             if(currentEdit === index){
//                 <div className="editWrapper" key={index}>
//                     <div className="genInformation">
//                         <fieldset>
//                             <legend>General Personal Information</legend>
//                             <label htmlFor="fname">Name:</label>
//                             <input type="text" name="fname" id="fname" placeholder="Enter your fullname.." 
//                             value={currentEditedItem.fname}
//                             onChange={(e) => {handleUpdateFullName(e.target.value)}} />
//                             <label htmlFor="email">Email:</label>
//                             <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" value={currentEditedItem.email} onChange={(e)=>handleUpdateEmail(e.target.value)} />
//                             <label htmlFor="phone">Phone:</label>
//                             <input type="tel" name="phone" id="phone" placeholder="0700200100" value={currentEditedItem.phone} onChange={(e)=>handleUpdatePhone(e.target.value)}/>
//                         </fieldset>
                
//                     </div>
//             <div className="Education">
//                 <fieldset>
//                     <legend>Educational Background</legend>
//                     <label htmlFor="schoolname">School Name:</label>
//                     <input type="text" name="schoolname" id="schoolname" placeholder="Enter your School name.." 
//                     value={currentEditedItem.schoolname}
//                     onChange={(e)=>handleUpdateSchoolName(e.target.value)} />
//                     <label htmlFor="studyTitle">Title of Study:</label>
//                     <input type="text" name="studyTitle" id="studyTitle" placeholder="Enter course studied" value={currentEditedItem.studyTitle} onChange={(e)=>handleUpdateStudyTitle(e.target.value)} />
//                     <label htmlFor="dateStudy">Date of Study:</label>
//                     <input type="date" name="dateStudy" id="dateStudy" placeholder="0700200100" value={currentEditedItem.dateStudy} onChange={(e)=>handleUpdateDateStudy(e.target.value)}/>
//                 </fieldset>
//             </div>
//             <div className="workexperience">
//                 <fieldset>
//                     <legend>Work Experience</legend>
//                     <label htmlFor="companyname">Company Name:</label>
//                     <input type="text" name="companyname" id="companyname" placeholder="Enter your Company name.." 
//                     value={currentEditedItem.companyname}
//                     onChange={(e)=>handleUpdateCompanyName(e.target.value)} />
//                     <label htmlFor="positionTitle">Position Title:</label>
//                     <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter the position you held.." 
//                     value={currentEditedItem.positionTitle}
//                     onChange={(e)=>handlePositionTitle(e.target.value)} />
//                     <label htmlFor="responsibilityDesc">Reponsibility Description:</label>
//                     <textarea name="responsibilityDesc" id="responsibilityDesc" value={currentEditedItem.responsibilityDesc} cols={20} rows={10} onChange={(e)=>handleUpdateResponsibilityDesc(e.target.value)}></textarea>
//                     <label htmlFor="dateWorkedFrom">Date From:</label>
//                     <input type="date" name="dateWorkedFrom" id="dateWorkedFrom"  value={currentEditedItem.dateWorkedFrom} onChange={(e)=>handleUpdateDateWorkedFrom(e.target.value)}/> 
//                     <label htmlFor="dateWorkedTo">Date To:</label>
//                     <input type="date" name="dateWorkedTo" id="dateWorkedTo"  value={currentEditedItem.dateWorkedTo} onChange={(e)=>handleUpdateDateWorkedTo(e.target.value)}/>      
//                 </fieldset>
//             </div>
//             <button onClick={handleUpdate}>Update</button>
//             </div>
//             }else{
//             return (
//                 <div className="mainContent" key={index}>
//                     <div className="personalInfoSec">
//                         <h3>Personal Information</h3>
//                         <p>FullName : {item.fname}</p>
//                         <p>Email  : {item.email}</p>
//                         <p>Phone  : {item.phone}</p>
//                     </div>
//                     <div className="EducationalBackground">
//                         <h3>Educational Background</h3>
//                         <p>School Name : {item.schoolname}</p>
//                         <p>Title of Study : {item.studyTitle}</p>
//                         <p>Date of Study : {item.dateStudy}</p>
//                     </div>
//                     <div className="WorkExperience">
//                         <h3>Work Experience</h3>
//                         <p>Company Name : {item.companyname}</p>
//                         <p>Position Held : {item.positionTitle}</p>
//                         <p>Responsibilities: {item.responsibilityDesc}</p>
//                         <p>Start Date : {item.dateWorkedFrom}</p>
//                         <p>End Date : {item.dateWorkedTo}</p>
//                     </div>

//                     <button onClick={()=>handleEdit(item,index)}>Edit</button>
//                 </div>
//             )}
//            })}
//             </header>
//         </div>
//         </>
        
//     )
// }