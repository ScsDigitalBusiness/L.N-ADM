let database = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]"); 
import { MaterialOverview } from "../../modules/class/charts/MaterialOverview";

let MaterialCharts = new MaterialOverview('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI, URL_API_COLABORATORS); 
 
MaterialCharts.getBarChart(); 
