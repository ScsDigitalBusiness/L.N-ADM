export class Forms {
  constructor(plastic, metal, papel, vidro, prensas, frete, info, form) {
    this.plasticButton = document.getElementById(plastic);
    this.metalButton = document.getElementById(metal);
    this.papelButton = document.getElementById(papel);
    this.vidroButton = document.getElementById(vidro);
    this.prensasButton = document.getElementById(prensas);
    this.freteButton = document.getElementById(frete);
    this.infoButton = document.getElementById(info);
    this.form = document.getElementById(form);
  }
}

Forms.prototype.change = function (el,nameOfChange,elementsInDom) {
 
  let elements =  document.getElementsByClassName(elementsInDom);  
  for(let element of elements) {
     if(element.classList.contains(el)) {
      document.querySelector(`.${el}`).style.backgroundColor = "white";
      document.querySelector(`.${el}`).style.color = "black"; 
      document.getElementById('material-title').innerHTML  = nameOfChange;
     } else {
       element.style.backgroundColor = "transparent"; 
       element.style.color = "white"; 

     }

  }

};


Forms.prototype.changeFormElement = function (elToAdd, elToRemove) {
  document.getElementById(elToRemove).innerHTML = "";
  this.form.innerHTML = elToAdd;
};
