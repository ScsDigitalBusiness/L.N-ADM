
const _table = Symbol(); 
export  class Table {
    constructor(table) {
        this[_table] = document.getElementById(table);
    }  
    
    showMaterial(el,url, key,category) {
        fetch(url).then((response) => response.json()).then((data) => {
            let db = data.data;
            for (let i in db) {
                document.getElementById(el).innerHTML +=
                    `<tr class = "leads-person" id="lead-${i}" > 
                      <td id="id-lead">${i}</td>
                      <td id="nome-lead"><div class="lead-img">
                      <img src="assets/utilites/material-ico.svg" alt="">
                      </div>  ${db[i][`${key}`]}</td>
                      <td id= "category">${category}</td> 
                     </tr>
                  `;
                if (i % 2 == 0) {
                    $("#lead-" + i).css("background-color", " #F5F5F5");
                } else {
                    $("#lead-" + i).css("background-color", "#FAFAFA");
                }
            }
        });
    }   

    showColaborator(el,url, key1,key2,key3) {
        fetch(url).then((response) => response.json()).then((data) => {
            let db = data.data;
            for (let i in db) {
                document.getElementById(el).innerHTML +=
                    `<tr class = "leads-person" id="lead-${i}" > 
                      <td id="id-lead">${i}</td>
                      <td id="nome-lead"><div class="lead-img">
                      <img src="assets/utilites/user.png" alt="">
                      </div>  ${db[i][`${key1}`]}</td>
                      <td id= "empresa">${db[i][`${key2}`]}</td> 
                      <td id= "dep">${db[i][`${key3}`]}</td> 
                     </tr>
                  `;
                if (i % 2 == 0) {
                    $("#lead-" + i).css("background-color", " #F5F5F5");
                } else {
                    $("#lead-" + i).css("background-color", "#FAFAFA");
                }
            }
        });
    }
}


 

 

