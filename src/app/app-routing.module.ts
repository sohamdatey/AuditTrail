import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { InsightsComponent } from './insights/insights.component';

const routes: Routes = [
  { path: '', redirectTo: '/auditTrail', pathMatch: 'full' },
  { path: 'auditTrail', component: AuditTrailComponent },
  { path: 'insights', component: InsightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AuditTrailComponent,InsightsComponent];
