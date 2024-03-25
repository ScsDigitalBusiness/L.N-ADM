import { DashBoard } from "../../modules/class/dashboard-modules/Dashboard-modules.js";  
import { MaterialOverview } from "../../modules/class/dashboard-modules/charts/MaterialOverview.js";
import { urlAPI, URL_API_COLABORATORS } from "../../modules/keysAndUrls.js";


let Dashboard = new DashBoard('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI,URL_API_COLABORATORS);  
Dashboard.getData();  
 
  
let m1 = new MaterialOverview('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI,URL_API_COLABORATORS)  


let count =    m1.getNumberOf('person', 'Yan');  

console.log(count); 