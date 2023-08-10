
export class Vector {
    // Propiedades:
    V: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    // Métodos
    mostrar() {
        for (let i = 0; i < this.V.length - 1; i++) {
            console.log(this.V[i]);
        }
    }   
    generarMultiplos(x: number) {
        for (let i = 0; i < this.V.length; i++) {
            this.V[i] = x * (i + 1);
        }
    }
    generarMultiplosInv(x: number) {
        for (let i=0; i<5; i++) {
            this.V[i] = x * (i + 1);
        }
        for (let i=5; i<this.V.length; i++) {
            this.V[i] = this.V[i - 1] - x;
        }
    }

}