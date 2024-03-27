import { DashBoard } from "../dashboard-modules/Dashboard-modules.js";

export class MaterialOverview extends DashBoard {
  #url
  
  constructor(
    totalLead, todayLeads, MonthLeads, line, bar, donout, polar, url, urlColaborators
  ) {
    super((totalLead, todayLeads, MonthLeads, line, bar, donout, polar, urlColaborators));
    this.#url = url;
  }

  getNumberOf(verify) {
    return fetch(this.#url).then((response) => response.json()).then((data) => {
      let database = data.output;
      let totalNumber = database.filter((val) => val.person == verify);
      return totalNumber.length;
    });


  }
  getBarChart() {
    const ctx3 = this.bar; 

    new Chart(ctx3, {
      type: "bar",
      data: {
        labels: [
          " Nenhum",
          "Plástico",
          "Metal",
          "Papel",
          "Vidro",
          "Prensas",
          "Info-Produto",
          "Frete"
        ],
        datasets: [
          {
            label: "Materiais Cadastrados",
            data: [
             
            ],
            borderWidth: 1,
            backgroundColor: [
              '#5EE95C',
              '#5EE95C',
              '#5EE95C',
              '#5EE95C',
              '#5EE95C',
              '#5EE95C',
              '#5EE95C'
            ],
            borderColor: '#5EE95C',
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  getDonoutChart() {
    

  }

}


