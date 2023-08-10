
import express from 'express';
import { Pila } from './classes/pila';
import { Cola } from './classes/cola';
import { Evaluador } from './classes/evaluador';

const app = express();
const port = 3000;

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Ruta para una API específica
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola, mundo!' });
});

// Insertar elemento a la pila
app.post('/api/pila/insertar', (req, res) => {
    const e = req.body.dato;
    const r = p.insertar(e);
    res.json({
        ok: r,
        pila: p.obtenerPila(),
    });
});

// Insertar elemento a la cola
app.post('/api/cola/insertar', (req, res) => {
    const r = c.insertar(req.body.dato);
    res.json({
        ok: r,
        cola: c.obtenerCola()
    });
});
// Extraer elemento de la cola
app.delete('/api/cola/extraer', (req, res) => {
    const r = c.extraer();
    res.json({
        ok: r != -999,
        datoExtraido: r,
        cola: c.obtenerCola()
    });
});
// Evaluar una expresion infija
app.post('/api/evaluador/evaluar', (req, res) => {
    const ev = new Evaluador();
    ev.convertir(req.body.infija);
    ev.evaluar();
    res.json({
        ok: true,
        postfija: ev.getPostfija(),
        resultado: ev.getResultado()
    });
});

// Manejo de errores
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Hubo un error en el servidor' });
});

const p = new Pila();
const c = new Cola();

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});