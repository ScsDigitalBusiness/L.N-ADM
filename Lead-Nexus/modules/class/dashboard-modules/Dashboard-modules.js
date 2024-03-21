//
export class DashBoard {
  constructor(
    totalLead,
    todayLeads,
    MonthLeads,
    line,
    bar,
    donout,
    polar,
    url,
    urlColaborators
  ) {
    this.totalLead = document.getElementById(totalLead);
    this.todayLeads = document.getElementById(todayLeads);
    this.MonthLeads = document.getElementById(MonthLeads);
    this.line = document.getElementById(line);
    this.bar = document.getElementById(bar);
    this.donout = document.getElementById(donout);
    this.polar = document.getElementById(polar);
    this.url = url;
    this.urlColaborators = urlColaborators;
  }
}

DashBoard.prototype.totalLeadsIn = function (db) {
  this.totalLead.innerHTML = db.length;
};

DashBoard.prototype.totalOf = function (db, key, areaCount) {
  let TotalOfCount = 0;
  for (let i in db) {
    if (db[i][key] !== "") {
      TotalOfCount++;
      areaCount.innerHTML = TotalOfCount;
    } else {
      TotalOfCount = TotalOfCount;
    }
  }
};

DashBoard.prototype.getNumberOf = function (data, key, verify) {
  let count = 0;
  for (let objs of data) {
    if (objs[key] == verify) {
      count++;
    }
  }
  return count;
}; 



DashBoard.prototype.getColab = function () {
  let numberOfRegisterFor = [];
  let nameOfColabs = this.getValuesOf(this.urlColaborators);
  fetch(this.url)
    .then((response) => response.json())
    .then((data) => {
      let db = data.output;

      for (let i in nameOfColabs) {
        numberOfRegisterFor.push(
          this.getNumberOf(db, "person", nameOfColabs[i])
        );
      }
    }); 

  return numberOfRegisterFor;
};
 
DashBoard.prototype.getValuesOf = function (url) {
  let myValues = [];
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let db = data.data;
      for (let values of db) {
        myValues.push(values.nome);
      }
    });
  return myValues;
}; 


DashBoard.prototype.getData = function () {
  fetch(this.url)
    .then((response) => response.json())
    .then((data) => {
      let db = data.output;
      this.totalLeadsIn(db);
      this.totalOf(db, "telefone", this.todayLeads);
      this.totalOf(db, "email", this.MonthLeads);
      let result = this.getNumberOf(db, "person", "Rafael");
      let result2 = this.getValuesOf(this.urlColaborators);
      let cl = this.getColab(db, result2, "person", this.getValuesOf);
      console.log(result2);
      console.log(result);
      console.log(cl);
   });
};

 export class  MaterialOverview extends DashBoard { 
   constructor (totalLead,todayLeads,MonthLeads,line, bar, donout, polar,url) {
    super((totalLead,todayLeads,MonthLeads,line, bar,donout,polar));  
      this.url = url; 
   } 
}   
