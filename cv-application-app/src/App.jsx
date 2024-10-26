import { useState } from 'react'
import './App.css'
import AddCVForm from './components/AddCVForm'
import EditCVForm from './components/EditCVForm'
import CVInfo from './components/CVInfo'

function App() {
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
    const [isEditing,setIsEditing] = useState(false)
    const [currentEditID,setCurrentEditID] = useState('')

    function reset(){
      setFullName('')
      setEmail('')
      setPhone('')
      setSchoolName('')
      setStudyTitle('')
      setdateStudy('')
      setCompanyName('')
      setDateWorkedFrom('')
      setDateWorkedTo('')
      setPositionTitle('')
      setResponsibilityDesc('')
    }
    
    function handleSubmit(e){
      e.preventDefault()
      let id = new Date().getTime();
      let name = fullName;
      let mail = email;
      let phon = phone;
      let nameOfSch = schoolName;
      let titleOfStudy = studyTitle
      let dateOfStudy = dateStudy
      let nameOfCompany = companyName
      let titleName = positionTitle
      let description = responsibilityDesc
      let fromDate = dateWorkedFrom
      let toDate = dateWorkedTo
      setInfo((prevInfo)=>{
        let updatedInfo = [...prevInfo,{id:id,fname:name,contactMail:mail,contactPhone:phon,schoolname:nameOfSch,studytitle:titleOfStudy,datestudy:dateOfStudy,companyname:nameOfCompany,title:titleName,desc:description,startdate:fromDate,enddate:toDate}]
        console.log(updatedInfo)
        return updatedInfo
      })
      reset()
    }

    function handleEdit(CVInfoItem){
      setIsEditing(true)
      setFullName(CVInfoItem.fname)
      setEmail(CVInfoItem.contactMail)
      setPhone(CVInfoItem.contactPhone)
      setSchoolName(CVInfoItem.schoolname)
      setStudyTitle(CVInfoItem.studytitle)
      setdateStudy(CVInfoItem.datestudy)
      setCompanyName(CVInfoItem.companyname)
      setDateWorkedFrom(CVInfoItem.startdate)
      setDateWorkedTo(CVInfoItem.enddate)
      setPositionTitle(CVInfoItem.title)
      setResponsibilityDesc(CVInfoItem.desc)
      setCurrentEditID(CVInfoItem.id)
      console.log('Editing')
    }
    function handleUpdateCV(e){
      e.preventDefault()
      let updatedName = fullName;
      let updatedMail = email;
      let updatedPhone = phone;
      let updatedNameOfSch = schoolName;
      let updatedTitleOfStudy = studyTitle
      let updatedDateOfStudy = dateStudy
      let updatedNameOfCompany = companyName
      let updatedTitleName = positionTitle
      let updatedDescription = responsibilityDesc
      let updatedFromDate = dateWorkedFrom
      let updatedToDate = dateWorkedTo
      let updatedCVInfo = info.map((item)=>{
        if(item.id === currentEditID){
          item.fname = updatedName
          item.contactMail = updatedMail
          item.contactPhone = updatedPhone
          item.schoolname = updatedNameOfSch
          item.studytitle = updatedTitleOfStudy
          item.datestudy = updatedDateOfStudy
          item.companyname = updatedNameOfCompany
          item.title = updatedTitleName
          item.desc = updatedDescription
          item.startdate = updatedFromDate
          item.enddate = updatedToDate
        }
        return item;
      })
      setInfo([...updatedCVInfo])
      setIsEditing(false)
      reset()
    }
    function handleDelete(CVInfoItem){
      setInfo((prevInfo)=>{
        let updatedInfo = prevInfo.filter((item)=>item.id !== CVInfoItem.id)
        return updatedInfo
      })
    }
    function handleReset(e){
        e.preventDefault()
        setIsEditing(false)
        reset();
    }
  return (
    <>
      {!isEditing && <AddCVForm fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} schoolName={schoolName} setSchoolName={setSchoolName} studyTitle={studyTitle} setStudyTitle={setStudyTitle} dateStudy={dateStudy} setdateStudy={setdateStudy} companyName={companyName} setCompanyName={setCompanyName} positionTitle={positionTitle} setPositionTitle={setPositionTitle} responsibilityDesc={responsibilityDesc} setResponsibilityDesc={setResponsibilityDesc} dateWorkedFrom={dateWorkedFrom} setDateWorkedFrom={setDateWorkedFrom} dateWorkedTo={dateWorkedTo} setDateWorkedTo={setDateWorkedTo} handleSubmit={handleSubmit}/>}

     {isEditing && <EditCVForm fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} schoolName={schoolName} setSchoolName={setSchoolName} studyTitle={studyTitle} setStudyTitle={setStudyTitle} dateStudy={dateStudy} setdateStudy={setdateStudy} companyName={companyName} setCompanyName={setCompanyName} positionTitle={positionTitle} setPositionTitle={setPositionTitle} responsibilityDesc={responsibilityDesc} setResponsibilityDesc={setResponsibilityDesc} dateWorkedFrom={dateWorkedFrom} setDateWorkedFrom={setDateWorkedFrom} dateWorkedTo={dateWorkedTo} setDateWorkedTo={setDateWorkedTo} handleUpdateCV={handleUpdateCV} handleReset={handleReset}/>}

      {info.map((item) =>{
        return <CVInfo key={item.id} CVInfoItem={item} handleEdit={handleEdit} handleDelete={handleDelete}/>
      })}
    </>
  )
}

export default App
