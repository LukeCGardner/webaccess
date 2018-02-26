import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from '../portal/portal.component';
import { AccessibilityComponent } from '../accessibility/accessibility.component';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'accessibility', component: AccessibilityComponent }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
