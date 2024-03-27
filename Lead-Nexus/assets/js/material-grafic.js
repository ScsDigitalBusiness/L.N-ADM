import {urlAPI, URL_API_COLABORATORS} from "../../modules/keysAndUrls.js"
import { MaterialOverview } from "../../modules/class/charts/MaterialOverview.js";

let MaterialCharts = new MaterialOverview('leads-count', 'today-count', 'count-month', 'line', 'bar', 'donout', 'polar', urlAPI, URL_API_COLABORATORS); 
 
MaterialCharts.getBarChart(); 
