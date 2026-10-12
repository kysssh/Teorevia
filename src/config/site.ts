import categorias from './categorias.json';

export const SITE = {
    nombre: 'Teorevia',
    lema: 'Todo lo que necesitas para competir. etsá aquí.',
    titulo: 'Teorevia | Todo lo que necesitas para competir',
    descripcion: 'Atlas teórico de programación competitiva en español, con implementaciones en C++.',
    autor: 'Kysssh',
    anio: 2026,
    repo: 'https://github.com/kysssh/teorevia',
    lenguaje: 'C++20',
};

export const CATEGORIAS = categorias as {
    slug: string; nombre: string; corto: string; color: string; icono: string;
}[];

export const NIVELES = [
    { n: 1, nombre: 'Básico', color: '#34D399' },
    { n: 2, nombre: 'Intermedio', color: '#22D3EE'},
    { n: 3, nombre: 'Avanzado', color: '#7C5CFF' },
    { n: 4, nombre: 'Experto', color: '#F43F5E' },
];