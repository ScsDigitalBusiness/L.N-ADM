import { Table } from "../../../../modules/class/getAPIS-modules.js";
import {
  papelAPI,
  metalAPI,
  vidroAPI,
  plasticoAPI,
  freteAPI,
  infoProdutoAPI,
} from "../../../../modules/keysAndUrls.js"; 

import { Forms } from "../../../../modules/class/registerMaterial.js";

let table = new Table("area-leads");
table.showMaterial("papel", papelAPI, "papel", "Papel");
table.showMaterial("metal", metalAPI, "metal", "Metal");
table.showMaterial("vidro", vidroAPI, "vidro", "Vidro");
table.showMaterial("plastico", plasticoAPI, "plastico", "Plástico");
table.showMaterial("frete", freteAPI, "frete", "Frete"); 
table.showMaterial(
  "info-produto",
  infoProdutoAPI,
  "infoproduto",
  "Info-Produto"
); 

let MyForm = new Forms(
  "plastico-mat",
  "metal-mat",
  "papel-mat",
  "vidro-mat",
  "prensas-mat",
  "frete-mat",
  "info-produto-mat",
  "form-field"
);
 


MyForm.papelButton.addEventListener("click", () => {
  MyForm.change('paper',"Papel.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/mE6csZaibEUyePUQorRhrM"
 method="POST"
>
 <input type="text" placeholder="Nome" name="Papel" required />
 <input type="text" placeholder="Marca" name="Marca" required />
 <input type="number" name="Peso" placeholder="Peso(kg)" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  );
});

MyForm.metalButton.addEventListener("click", () => {
  MyForm.change('metal',"Metal.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/kasjRtpCxp2enrjGhhaLP"
 method="POST"
>
 <input type="text" placeholder="Nome" name="Metal" required />
 <input type="text" placeholder="Marca" name="Marca" required />
 <input type="number" name="Peso" placeholder="Peso(kg)" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  );
});

MyForm.vidroButton.addEventListener("click", () => {
  MyForm.change('glass',"Vidro.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/uv7e9WgyZvkiJp4iL3Rpv7"
 method="POST"
>
 <input type="text" placeholder="Nome" name="Vidro" required />
 <input type="text" placeholder="Marca" name="Marca" required />
 <input type="number" name="Peso" placeholder="Peso(kg)" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  );
});

MyForm.prensasButton.addEventListener("click", () => {
  MyForm.change('prense',"Prensas.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/u6qevXmtwMPbKCRji5Eju7"
 method="POST"
>
 <input type="text" placeholder="Nome" name="Prensas" required />
 <input type="text" placeholder="Marca" name="Marca" required />
 <input type="number" name="Peso" placeholder="Peso(kg)" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  );
});

MyForm.infoButton.addEventListener("click", () => {
  MyForm.change('info',"Info-Produto.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/a3NgEr4opBfBYzrkCnEvfc"
 method="POST"
>
 <input type="text" placeholder="Nome" name="Info-Produto" required />
 <input type="text" placeholder="Marca" name="Marca" required />
 <input type="text" name="Categoria" placeholder="Categoria" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  );
});
MyForm.freteButton.addEventListener("click", () => {
  MyForm.change('delivery',"Frete.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/74ViMZd7KTJkWHa3J2pHYh"
 method="POST"
>
 <input type="text" placeholder="Modalidade" name="Frete" required />
 <input type="text" placeholder="Empresa" name="Empresa" required />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  ); 
}); 

MyForm.plasticButton.addEventListener("click", () => {
  MyForm.change('plastic',"Plástico.",'material__card');
  MyForm.changeFormElement(
    `<form 
id = "myForm"
 class="form-body"
 action="https://api.sheetmonkey.io/form/hG2uhN6qXbNDUE8AhTHWSf"
 method="POST"
>
<input type="text" placeholder="Nome" name="Plástico" required />
<input type="text" placeholder="Marca" name="Marca" required />
<input type="number" name="Peso" placeholder="Peso(kg)" />
 <button type="submit" class="button-register">Cadastrar</button>
</form>`,
    "myForm"
  ); 
});