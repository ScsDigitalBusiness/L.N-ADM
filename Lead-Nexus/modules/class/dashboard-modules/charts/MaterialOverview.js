import { DashBoard } from "../Dashboard-modules"; 

export class  MaterialOverview extends DashBoard { 
    constructor (totalLead,todayLeads,MonthLeads,line, bar, donout, polar,url) {
     super((totalLead,todayLeads,MonthLeads,line, bar,donout,polar));  
       this.url = url; 
    } 
 }    
  

 MaterialOverview.prototype.getNumberOf = function (key, verify) {
   let count = 0; 
   fetch(this.url).then((response) => response.json()).then((data)=>  { 
      let db = data.output;   
      console.log(db); 
        
    })
   
   return count;
 };
 