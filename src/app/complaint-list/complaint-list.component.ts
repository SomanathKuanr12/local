import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrl: './complaint-list.component.css'
})
export class ComplaintListComponent implements OnInit{

  constructor(private router:Router){
  }
  ngOnInit(): void {
   this.getValue()
  
  }


  complaintArray:any[]=[]
 
  getValue(){
    const localData=localStorage.getItem("complaintList")
    if(localData != null)
       this.complaintArray=JSON.parse(localData)
    console.log(this.complaintArray)  
  }
  onEdit(id:number)
  {
    this.router.navigate(['/new-complain',id])
  }
  onDelete(id:number)
  {
      //const index=this.complaintArray.findIndex(m=> m.id == id)
      this.complaintArray.splice(id,1) //splice method is used to remove elemnt from an array based on index position and no.of element
        localStorage.setItem("complaintList",JSON.stringify(this.complaintArray))
  }

}
