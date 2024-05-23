import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';

import { USDComponent } from './usd/usd.component';
import { UsdINRPipe } from './Pipe/usd-inr.pipe';
import { SearchPipe } from './Pipe/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterPipe,
    UsdINRPipe,
    USDComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
