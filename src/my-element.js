import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{

    constructor(){
        super();
        this.saludo = "";
    }

static get properties(){
    return{
        saludo:{
            type:String
        }
    }
};


   setValue(){
    this.saludo ="Sammy Ico";
   };

   

    render(){
        return html `
        <h1> Myelement  ${this.saludo}</h1>
        <button @click=${()=>this.setValue()}>Cambio saludo</button>`
    };
}

customElements.define('my-element',MyElement);
