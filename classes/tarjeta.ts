
export class Tarjeta {
    public titular: string = "";
    private numero: number = 0;
    public fechaVencimiento: string = "";
    private cvc: number = 0;

    constructor() {
        console.log("Tarjeta creada!");
    }
    pagar() {

    }
    retirar() {

    }
    depositar() {

    }
    setCvc(cvc: number) {
        this.cvc = cvc;
    }
    setNumero(numero: number) {
        this.numero = numero;
    }
    mostrarDatos() {
        console.log("Titular: ", this.titular);
        console.log("Fecha de vencimiento: ", this.fechaVencimiento);
        console.log("Numero: ", this.numero);
        console.log("CVC: ", this.cvc);
    }
}
