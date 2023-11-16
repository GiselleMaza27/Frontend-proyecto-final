import imagen1 from './postres/lemon-pie.jpg'
import imagen2 from './postres/porcion-helada.jpg'
import imagen3 from "./postres/torta-chocolate.jpg";
import imagen4 from "./postres/torta-frutilla.jpg";
import imagen5 from "./postres/tronquito1.jpg";

// -----------------------------------------------------------------

import imagen1B from './bebidas/coca1.jpg'
import imagen2B from './bebidas/limonada.jpg'
import imagen3B from './bebidas/naranja.jpg'
import imagen4B from './bebidas/pomelo.jpg'

// -----------------------------------------------------------------

import imagen1R from './comida-rapida/hamburguesa1.jpg'
import imagen2R from './comida-rapida/Hamburguesa.jpg'
import imagen3R from './comida-rapida/picada.jpg'
import imagen4R from './comida-rapida/pizza.jpg'
import imagen5R from './comida-rapida/pizza2.jpg'

// -----------------------------------------------------------------

import imagen1P from './comidas-al-plato/berenjena.jpg'
import imagen2P from './comidas-al-plato/milanesa.jpg'
import imagen3P from './comidas-al-plato/pescado.jpg'
import imagen4P from './comidas-al-plato/pescado1.jpg'

// ------------------------------------------------------------------

export const imagenesCategorias =[
    {'img':imagen1, 'titulo':'Postres', 'id':'1'},
    {'img':imagen1B, 'titulo':'Bebidas','id':'2'},
    {'img':imagen1R, 'titulo':'Comida Rapida','id':'3'},
    {'img':imagen3P, 'titulo':'Minutas','id':'4'},
]


export const imagenesPostres= [
    {"img":imagen1,"titulo":"Lemon-pie", "descripcion":"Porción de lemon-pie", "precio":"500" },
    {"img":imagen2,"titulo":"Torta Helada", "descripcion":"Porción de torta helada", "precio":"600" },
    {"img":imagen3, "titulo":"Torta Selva Negra", "descripcion":"Porción de torta de chocolate ", "precio":"700"},
    {"img":imagen4, "titulo":"Torta Helada", "descripcion":"Porción de torta helada de frutilla ", "precio":"700"},
    {"img":imagen5, "titulo":"Tronquito de chocolate", "descripcion":"Pionono de chocolate ", "precio":"900"},
]


export const imagenesBebidas=[
    {"img":imagen1B,"titulo":"Coca-Cola", "descripcion":"Lata de coca-cola", "precio":"300" },
    {"img":imagen2B,"titulo":"Limonada", "descripcion":"Vaso de limonada natural", "precio":"450" },
    {"img":imagen3B,"titulo":"Naranja", "descripcion":"Vaso de Naranja natural", "precio":"500" },
    {"img":imagen4B,"titulo":"Pomelo", "descripcion":"Vaso de Pomelo natural", "precio":"450" },
]

export const imagenesComidaRapida=[
    {"img":imagen1R,"titulo":"Hamburguesa con papas Simple", "descripcion":"Hamburguesa con papas tomate, lechuga y queso", "precio":"2500" },
    {"img":imagen2R,"titulo":"Hamburguesa con papas Super", "descripcion":"Hamburguesa con papas tomate, lechuga, jamon, queso y huevo", "precio":"2900" },
    {"img":imagen3R,"titulo":"Picada para 2", "descripcion":"Tabla de fiambres surtidos, aceitunas y mani", "precio":"2700" },
    {"img":imagen4R,"titulo":"Pizza comun", "descripcion":"Pizza común", "precio":"2000" },
    {"img":imagen5R,"titulo":"Pizza especial", "descripcion":"Pizza especial", "precio":"2600" },
]

export const imagenesComidaPlato=[
    {"img":imagen1P,"titulo":"Berenjenas gratinadas", "descripcion":"Berenjenas gratinadas en salsa de tomate", "precio":"2800" },
    {"img":imagen2P,"titulo":"Milanesa con papas", "descripcion":"Milanesa con papas fritas", "precio":"2900" },
    {"img":imagen3P,"titulo":"Merluza en salsa ", "descripcion":"Merluza en salsa blanca", "precio":"3000" },
    {"img":imagen4P,"titulo":"Salmón con pure", "descripcion":"Salmón con pure", "precio":"2900" },
]