import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { PortalComponent } from './portal/portal.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
