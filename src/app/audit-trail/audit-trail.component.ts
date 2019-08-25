import { Component, OnInit } from '@angular/core';
import { AuditActivity } from './audit-activity';
import { AuditTrailService } from '../audit-trail.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  constructor(  private _auditTrailService : AuditTrailService) { }
  auditActivities : AuditActivity[];
  ngOnInit() {
    this.auditActivities = this._auditTrailService.getAuditTrail();
  }

}
