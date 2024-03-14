const formElement = {
  InputName: () => document.getElementById("inputName"),
  InputEmail: () => document.getElementById("inputEmail"),
  InputPassword: () => document.getElementById("inputPass"),
  Button: () => document.getElementById("login-btn"),
};

const errorMenssage = (el) => {
  el.style.border = "1px solid red";
  formElement.Button().setAttribute("disabled", "disabled");
};

const correctMenssage = (el) => {
  el.style.border = "1px solid green";
  formElement.Button().setAttribute("disabled", "disabled");
};

function GetLoginDataSet(url,email, pass) {
  fetch(url).then((response) => {
    response.json().then((dados) => {
      dados.dados.map((data) => {
        const regexEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let resultEmail = regexEmail.test(email);

        if (email == data.email && pass == data.password) {
          window.location.href = "Lead-Nexus/dash.html";
        } else {
          if (!resultEmail) {
            errorMenssage(formElement.InputName());
          } else {
            if (resultEmail) {
              formElement.Button().removeAttribute("disabled", "disabled");
              correctMenssage(formElement.InputName());
            }
          }
        }
      });
    });
  });
}

formElement.Button().addEventListener("click", () =>
  GetLoginDataSet(
    "../data/accounts.JSON",

    formElement.InputEmail().value,
    formElement.InputPassword().value
  )
);
