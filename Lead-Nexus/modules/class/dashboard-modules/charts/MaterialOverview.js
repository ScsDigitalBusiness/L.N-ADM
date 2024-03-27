import { DashBoard } from "../Dashboard-modules.js";

export  class MaterialOverview extends DashBoard { 
 
  #url
  constructor(
    totalLead,
    todayLeads,
    MonthLeads,
    line,
    bar,
    donout,
    polar,
    url
  ) {
    super((totalLead, todayLeads, MonthLeads, line, bar, donout, polar));
    this.#url = url;
  }  
  
  getNumberOf(key, verify) {
    let values = 0; 
    fetch(this.url).then((response) => response.json()).then((data) => { 
       let  database = data.output; 
        values =   this.getNumberWithKey(database,key,verify); 
       });
    return values;
  }

  getNumberWithKey(database, key, verify) {
    let count = 0; 
  
    for (let objs of database) {
      if (objs[key] == verify) {
        count++;
      }
    } 
    return count; 
  }
} 


 

