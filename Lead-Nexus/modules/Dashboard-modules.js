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

  GetNumberOfRegister(db, Filter) {
    let NumberOfRegister = db.filter((value) => value.person == Filter);
    return NumberOfRegister.length;
  }

  barChart(db) {
    let colaborators = [];
    fetch(this.urlColaborators)
      .then((response) => response.json())
      .then((data) => {
        let db = data.data;
        console.log(data);
        fetch(this.url)
          .then((response) => response.json())
          .then((output) => {
            let systemPrincipalDB = output.output;
            console.log(systemPrincipalDB);
            for (let i in db) {
              for (let j in systemPrincipalDB) {
                if (db[j].nome == systemPrincipalDB[i]) {
                  let register = GetNumberOfRegister(
                    systemPrincipalDB,
                    db[j].nome
                  );
                  colaborators.push(register);
                }
              }
            }
            return colaborators;
          });
      });

    // for (let i in db) {

    //   const ctx2 = document.getElementById("bar");
    //   new Chart(ctx2, {
    //     type: "bar",
    //     data: {
    //       labels: ["Yan", "Rafael", "Erlaine", "Enailiane"],

    //       datasets: [
    //         {
    //           label: "Leads Cadastradas",
    //           data: [segunda, terca, quarta, quinta, sexta],
    //           borderWidth: 1,
    //           backgroundColor: [
    //             "#5EE95C",
    //             "#5EE95C",
    //             "#5EE95C",
    //             "#5EE95C",
    //             "#5EE95C",
    //             "#5EE95C",
    //             "#5EE95C",
    //           ],
    //           borderColor: "#5EE95C",
    //         },
    //       ],
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true,
    //         },
    //       },
    //     },
    //   });
    // }
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



DashBoard.prototype.showColab = function () {
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
      let cl = this.showColab(db, result2, "person", this.getValuesOf);
      console.log(result2);
      console.log(result);
      console.log(cl);
      let result3 = this.showColab();
      console.log(result3);
    });
};
