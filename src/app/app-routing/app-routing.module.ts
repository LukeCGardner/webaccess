import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from '../portal/portal.component';
import { AccessibilityComponent } from '../accessibility/accessibility.component';
import { OverviewComponent } from '../overview/overview.component';
import { FeatureComponent } from '../feature/feature.component';

const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'feature', component: FeatureComponent }
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
