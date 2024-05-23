import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { FormsModule } from '@angular/forms';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NewComplainComponent,
    ComplaintListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
