import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  department_name='';
  department_description='';
  id=0;
  departments=[
    { id:1,name:'information room',description:'this is the best room  ' },
    { id:2,name:'QC room',description:'this is the boy group' },
    { id:3,name:'DEV room',description:'this is an ghost ' },
  ]




  constructor() { }

  ngOnInit(): void {
  }
  create(){
    const i= this.departments.filter(e => e.name === this.department_name)
    console.log(i)
     if(i.length === 0){
       this.departments.push({ 
         id: this.departments.length + 1,
         name: this.department_name,
         description: this.department_description, });
       this.department_name='';
       this.department_description='';
     }
     else{ 
       alert('trung')
     }
    
  }


  value='';
  reset(){
   
    this.department_name= this.value;
    this.department_description= this.value;
  }

  delete(id:number){
    const deletes = this.departments.findIndex(dev => dev.id === id) 
    this.departments.splice(deletes,1)
  }
  edit(id:number){
    const edit = this.departments.findIndex(dev => dev.id === id) 
    this.department_name=this.departments[edit].name;
    this.department_description=this.departments[edit].description;
    this.id=id;
  }
  update(){
    const update = this.departments.findIndex(dev => dev.id === this.id) 
    this.departments[update].name=this.department_name;
    this.departments[update].description=this.department_description;
  }




}
