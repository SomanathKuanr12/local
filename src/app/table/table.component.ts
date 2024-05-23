import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  filterText:string='all';
  searchText:string='';
  totalMark=600;
students=[{
  id:1,
  name:'ram',
  gender:'male',
  dob:'11/02/2000',
  fee:4900,
  mark:520,
},
{
  id:2,
  name:'sam',
  gender:'male',
  dob:'10/08/2001',
  fee:4200,
  mark:560,
},
{
  id:3,
  name:'bob',
  gender:'male',
  dob:'03/06/2003',
  fee:4500,
  mark:420,
},
{
  id:2,
  name:'smith',
  gender:'female',
  dob:'10/08/2001',
  fee:4200,
  mark:560,
},
{
  id:2,
  name:'riya',
  gender:'female',
  dob:'10/08/2001',
  fee:4200,
  mark:560,
},
{
  id:2,
  name:'Jack',
  gender:'male',
  dob:'10/08/2001',
  fee:4200,
  mark:560,
}
]
}
