import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*
contacts:Contact[]=[
  {cid:'100',fullName:'Ram',email:'ram@gmail.com',mobile:'9900688411',deptName:'CS'},
  {cid:'101',fullName:'Reetu',email:'retu@gmail.com',mobile:'9900688412',deptName:'IS'},
  {cid:'102',fullName:'Lucky',email:'lak@gmail.com',mobile:'9900688413',deptName:'Civil'},
  {cid:'103',fullName:'Mrudulla',email:'Mrudu@gmail.com',mobile:'9900678411',deptName:'CS'},
  {cid:'104',fullName:'Rashmi',email:'rosh@gmail.com',mobile:'9900688421',deptName:'EC'},
  {cid:'105',fullName:'Neelema',email:'neelu@gmail.com',mobile:'9900684411',deptName:'EEE'},
  {cid:'106',fullName:'Appu',email:'appu@gmail.com',mobile:'9900688415',deptName:'IS'}
];*/
  constructor(private http:HttpClient) { }
  getContactData():Observable<Contact[]>{    //return type is contact[]
    
   return this.http.get("https://anandcbook.herokuapp.com/contacts/");
   
  }
}
