import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

const routes: Routes = [
  {path:'new-complain',component:NewComplainComponent},
  {path:'new-complain/:id',component:NewComplainComponent},
  {path:'complaint-list',component:ComplaintListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
