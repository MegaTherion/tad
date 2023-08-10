
export class Cola {
    private V: number[] = [0, 0, 0, 0, 0];
    private inicio: number; 
    private fin: number; 
    private tam: number;
    constructor() {
        this.inicio = -1;
        this.fin = -1;
        this.tam = 5;
    }
    public estaVacia(): boolean {
        return (this.inicio == -1 && this.fin == -1);
    }
    public estaLlena(): boolean {
        return this.fin == this.tam - 1;
    }
    public insertar(x: number): boolean {
        if (this.estaLlena())
            return false;
        if (this.estaVacia()) {
            this.inicio = 0;
            this.fin = 0;
        } else {
            this.fin++;
        }
        this.V[this.fin] = x;
        return true;
    }
    public extraer(): number {
        if (this.estaVacia())
            return -999;
        let aux = this.V[this.inicio];
        if (this.inicio == this.fin) {
            this.inicio = this.fin = -1;
        } else {
            this.inicio ++;
        }
        return aux;
    }
    public obtenerCola() {
        return this.V.slice(this.inicio, this.fin + 1);
    }
}