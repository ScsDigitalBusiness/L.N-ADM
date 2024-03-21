import { DashBoard } from "../dashboard-modules/Dashboard-modules.js"; 

export class  MaterialOverview extends DashBoard { 
    constructor (totalLead,todayLeads,MonthLeads,line, bar, donout, polar,url) {
     super((totalLead,todayLeads,MonthLeads,line, bar,donout,polar));  
       this.url = url; 
    } 
 }    
