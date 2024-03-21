import { DashBoard,MaterialOverview } from "../../modules/class/dashboard-modules/Dashboard-modules.js" 
import { urlAPI, URL_API_COLABORATORS } from "../../modules/keysAndUrls.js";


let Dashboard = new DashBoard('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI,URL_API_COLABORATORS);  
Dashboard.getData();  
let n1 = new MaterialOverview('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI,URL_API_COLABORATORS); 
  

