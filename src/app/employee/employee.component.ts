import { Component, OnInit } from '@angular/core';
export class Candidature {id:number;name:string;department:string;joining_date:Date}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  today =new Date();
  user1:string= '';
  departmentCount:any =[]
  candidate_data: Candidature[]=[ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": new Date('10/08/2016')
},
{"id": 12,"name": "John","department": "HR","joining_date": new Date('1/18/2011')},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": new Date('11/28/2019')},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": new Date('7/7/2017')},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": new Date('8/19/2014')},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": new Date('10/05/2014')}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": new Date('4/6/2014')},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": new Date('12/08/2010')}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": new Date('5/7/2011')},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": new Date('10/20/2010')}]

candidates = Object.assign([], this.candidate_data);

  constructor() { }

  ngOnInit() {
  }
  sortAsc(){
    this.candidate_data.sort(function(a, b) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }    });
  }

  sortDesc(){
    this.candidate_data.sort(function(a, b) {
      if ( a.name > b.name ){
        return -1;
      }
      if ( a.name < b.name ){
        return 1;
      }    });
  }

  sortAscDate(){
    this.candidate_data.sort(function(a, b) {
      if ( a.joining_date < b.joining_date ){
        return -1;
      }
      if ( a.joining_date > b.joining_date ){
        return 1;
      }    });
  }

  sortDescDate(){
    this.candidate_data.sort(function(a, b) {
      if ( a.joining_date > b.joining_date ){
        return -1;
      }
      if ( a.joining_date < b.joining_date ){
        return 1;
      }    });
  }
  twoyearolddata(){
    var twoyearold = new Date();
    twoyearold.setFullYear(twoyearold.getFullYear() - 2);
  this.candidate_data = this.candidate_data.filter(data => data.joining_date <= twoyearold); 
  }

  notdevelopment(){
  
  this.candidate_data = this.candidate_data.filter(data => data.department != 'Development'); 
  }

  alldata(){
    this.candidate_data =this.candidates
  }
  searchf1(user){
     let userexist = this.candidates.find(
     function(el) {
    if (el.name === user)
     return el;
    }
   );
   console.log(userexist);
   this.candidate_data =[]
   if(userexist !=undefined)
     this.candidate_data.push(userexist)
  if(user ==='')
     this.candidate_data=this.candidates
  }

  

  searchfun(user){
    var userlist =[];
    this.candidates.forEach(
    function(el) {
   if (el.name === user){
   userlist.push(el)
   }
  }
  );
    this.candidate_data=userlist
    if(user ==='')
    this.candidate_data=this.candidates
 
 
}

countfun(){
  var frequency = this.candidate_data
  .map(({ department }) => department)
  .reduce((departments, department) => {
    const count = departments[department] || 0;
    departments[department] = count + 1;
    return departments;
  }, {});
  console.log(frequency);
  this.departmentCount = frequency

}

}
