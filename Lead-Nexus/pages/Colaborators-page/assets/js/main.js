import { Table } from "../../../../modules/class/getAPIS-modules.js";
import {
 URL_API_COLABORATORS,
} from "../../../../modules/keysAndUrls.js";


let table = new Table("area-leads");
table.showColaborator("colaborators", URL_API_COLABORATORS, "nome","empresa","dep"); 




