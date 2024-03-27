// 

export class DashBoard {
  #totalLead
  #todayLeads
  #MonthLeads
  #line
  #bar
  #donout
  #polar
  #url
  #urlColaborators
  constructor(
    totalLead, todayLeads, MonthLeads, line, bar, donout, polar, url, urlColaborators
  ) {
    this.#totalLead = document.getElementById(totalLead);
    this.#todayLeads = document.getElementById(todayLeads);
    this.#MonthLeads = document.getElementById(MonthLeads);
    this.#line = document.getElementById(line);
    this.#bar = document.getElementById(bar);
    this.#donout = document.getElementById(donout);
    this.#polar = document.getElementById(polar);
    this.#url = url;
    this.#urlColaborators = urlColaborators;
  }

  totalLeadsIn(db) {
    this.#totalLead.innerHTML = db.length;

  }

  totalOf(db, key, areaCount) {
    let TotalOfCount = 0;
    for (let i in db) {
      if (db[i][key] !== "") {
        TotalOfCount++;
        areaCount.innerHTML = TotalOfCount;
      } else {
        TotalOfCount = TotalOfCount;
      }
    }
  }

  getNumberOf(data, key, verify) {
    let count = 0;
    for (let objs of data) {
      if (objs[key] == verify) {
        count++;
      }
    }
    return count;
  }

  getValuesOf(url, key) {
    let myValues = [];
    fetch(url).then((response) => response.json()).then((data) => {
      let db = data.data;
      for (let values of db) {
        myValues.push(values[`${key}`]);
      }
    });

    return myValues;
  }

  get getData() {
    fetch(this.#url).then((response) => response.json()).then((data) => {
      let db = data.output;
      this.totalLeadsIn(db);
      this.totalOf(db, "telefone", this.#todayLeads);
      this.totalOf(db, "email", this.#MonthLeads);
    });
  }
}
