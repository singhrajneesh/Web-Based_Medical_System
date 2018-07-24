import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PatientDataService {

  constructor(private http : Http) { }

getPatientDetails(emailId){
return this.http.get("http://localhost:8080/getdata/"+emailId)
.map(data => data.json(),
(error)=>{})
}

postPatientDetails(obj){
console.log(obj);
return this.http.post("http://localhost:8080/addingdata",obj)
.map(data => data.json(),
(error)=>{})
}


putPatientDetails(obj){
console.log(obj);
return this.http.put("http://localhost:8080/updatepatient",obj,)
.map(data => data.json(),
(error)=>{})
}

getDiet(obj){
return this.http.post("http://localhost:8080/getdiet",obj)
.map(data => data.json(),
(error)=>{})
}

}
