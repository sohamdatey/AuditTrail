import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuditTrailService {

  constructor(private http : HttpClient) { }
  getAuditTrail(){
  
    return [
      {
        "type" : 1 , "name" : "made to eft"
      },
      {
        "type" : 2 , "name" : "address change"
      }
      
    ]
  }
}
