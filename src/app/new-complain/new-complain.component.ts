import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrl: './new-complain.component.css'
})
export class NewComplainComponent implements OnInit{

 
  complaintObj={
    id:1,
    aginst:'',
    name:'',
    phone:'',
    email:'',
    city:'',
    state:'',
    pin:'',
    desc:''
  }
  complaintArray:any[]=[]
  //code for update
  currentId:number=0;  
  constructor(private activeroute:ActivatedRoute){  //to get the reference of currently activate route
    this.activeroute.params.subscribe((res:any)=>{  //to get the data 
      if(res.id)
      {
        console.log(res.id)
        this.currentId=res.id; //stores the id 
      }
    })
  }
  //
  ngOnInit(){
    const localdata=localStorage.getItem("complaintList")//complaintList is  the key because in localStorage data are stored in key-Value pair
    if(localdata !=null)
    {
      this.complaintArray=JSON.parse(localdata)
    if(this.currentId!=0) //if there is an id then we need to get the data of that id
    {
       const currentRecord=this.complaintArray.find(m=> m.id == this.currentId);//stores the info of the id
          this.complaintObj=currentRecord;
       
    }
  }
  }

  onRegister(){
    const localdata=localStorage.getItem("complaintList")//complaintList is  the key because in localStorage data are stored in key-Value pair
    if(localdata==null)
    {
      this.complaintArray.push(this.complaintObj)//pushing the object into array
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray))//ilocalStorage data is only stored in string format
    }
    else{
      let parseData=JSON.parse(localdata)
      //console.log(Math.max(this.complaintObj.id))
      this.complaintObj.id=parseData.length+1
      this.complaintArray.push(this.complaintObj)
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray))
    }
   
  }
onUpdate()
{
  const currentRecord=this.complaintArray.find(m=> m.id == this.currentId);
  if(currentRecord != undefined)
  {
    const index=this.complaintArray.findIndex(m=> m.id == this.currentId)
    this.complaintArray.splice(index,1) //splice method is used toremove elemnt from an array based on index position and no.of element
    this.complaintArray.push(this.complaintObj)
      localStorage.setItem("complaintList",JSON.stringify(this.complaintArray))
     
  }
}


onSubmit(){
if(this.complaintObj.name==""||this.complaintObj.name.length<2||this.complaintObj.name.includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'|| '0'))
        {
            alert("Enter correct name");
            return false;
        }
        if(this.complaintObj.phone.length <10 ||this.complaintObj.phone.length >10)
        {
            alert("Enter correct phone no");
            // this.complaintObj.phone.focus();
            return false;
        }
        if(this.complaintObj.pin.length <3 || this.complaintObj.pin=='' ||this.complaintObj.pin==" ")
        {
            alert("Enter correct pin");
            return false;
        }
        if(this.complaintObj.state.length <3 || this.complaintObj.state=='' ||this.complaintObj.state==" ")
        {
            alert("Enter correct state");
            return false;
        }
        if(this.complaintObj.city.length <3 || this.complaintObj.city=='' ||this.complaintObj.city==" ")
        {
            alert("Enter correct city");
            return false;
        }
   
       
        return true
        }
        
    }
 



