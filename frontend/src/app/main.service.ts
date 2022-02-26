import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  addprofessor(pdata:any,id:any){
    console.log("enetered in service")
    return this.http.post<any>("http://localhost:3400/addprofessor",{pdata,id})
  }
  getuserdata(id:any){
    console.log("enterd in service for getting signup data")
    return this.http.get<any>("http://localhost:3400/getuserdata/"+id)
  }
  getprofiledata(id:any){
    console.log("enterd in service for getting profile data")
    return this.http.get<any>("http://localhost:3400/getprofiledata/"+id)
  }
  editprofessor(pdata:any,userid:any,mainid:any){
    console.log("enterd in service for updating professor data")
    return this.http.post<any>("http://localhost:3400/updateprofessor/"+mainid,{pdata,userid})
  }
  deleteprofessor(id:any)
  {
    console.log("enterd in service for deleting professor data")
    return this.http.delete<any>("http://localhost:3400/deleteprofessor/"+id)
  }
  addcourse(coursedata:any,id:any){
    console.log("enterd in service for adding course data")
    return this.http.post<any>("http://localhost:3400/addcourse/",{coursedata,id})
  }
  getCourses(id:any){
    console.log("enterd in service for getting courses")
    return this.http.get<any>("http://localhost:3400/getCourses/"+id)
  }
  getAllCourses(){
    console.log("enterd in service for getting courses")
    return this.http.get<any>("http://localhost:3400/getAllCourses")
  }
  mycourses(id:any){
    console.log("enterd in service for getting Mycourses")
    return this.http.get<any>("http://localhost:3400/mycourses/"+id)
  }
  getapplications(id:any){
    console.log("enterd in service for getting Applications")
    return this.http.get<any>("http://localhost:3400/applications/"+id)
  }
  addstudent(studentdata:any,id:any,proid:any,courseid:any){
    console.log("enterd in service for registering student data")
    return this.http.post<any>("http://localhost:3400/addstudent",{studentdata,id,proid,courseid})
  }
  getdetails(userid:any){
    console.log("enterd in service for getting studentregister")
    return this.http.get<any>("http://localhost:3400/getdetails/"+userid)
  }
  acceptstatus(courseid:any,userid:any,seatscount:any){
    console.log("enterd in service for updating accept request")
    return this.http.post<any>("http://localhost:3400/acceptstatus/"+courseid,{userid,seatscount})
  }
  reject(userid:any){
    console.log("enterd in service for updating reject request")
    return this.http.get<any>("http://localhost:3400/reject/"+userid)
  }
  allapplications(){
    console.log("enterd in service for getting all applications")
    return this.http.get<any>("http://localhost:3400/allapplications")
  }
  getprof(){
    console.log("enterd in service for getting all professors")
    return this.http.get<any>("http://localhost:3400/allprofessors")
  }
  getstatus(id:any){
    console.log("enterd in service for getting status")
    return this.http.get<any>("http://localhost:3400/getstatus/"+id)
  }
  getstatusdetails(id:any){
    console.log("enterd in service for getting status for students")
    return this.http.get<any>("http://localhost:3400/getstatusstudents/"+id)
  }
}
