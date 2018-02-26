import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseNavComponent } from './core/base-nav/base-nav.component';
import { PortalComponent } from './portal/portal.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { OverviewComponent } from './overview/overview.component';
import { FeatureComponent } from './feature/feature.component';

import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { Global } from './core/global';


@NgModule({
  declarations: [
    AppComponent,
    BaseNavComponent,
    PortalComponent,
    OverviewComponent,
    FeatureComponent,
    AccessibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
