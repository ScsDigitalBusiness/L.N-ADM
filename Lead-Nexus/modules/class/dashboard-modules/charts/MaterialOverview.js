import { DashBoard } from "../Dashboard-modules.js";

export class MaterialOverview extends DashBoard {

  #url
  constructor(
    totalLead, todayLeads, MonthLeads, line, bar, donout, polar, url, urlColaborators
  ) {
    super((totalLead, todayLeads, MonthLeads, line, bar, donout, polar, urlColaborators));
    this.#url = url;

  }

  getNumberOf(verify) {

    let values = 0;
    return fetch(this.#url).then((response) => response.json()).then((data) => {
      let count = 0; 
       let database = data.output; 
   
       let totalNumber =  database.filter((val)=> val.person == verify); 

       return totalNumber.length; 

      
    });


  } 
  

  
}




