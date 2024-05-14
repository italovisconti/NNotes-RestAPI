import { Note } from "../note.model";


async function create() {
    const note = await Note.find();
    if(note.length>0) return;
    const notes =[{
        title: 'Mi primera nota',
        content: 'Hoy la clase estuvo muy divertida. Espero que el martes sea igual'
    },{
        title: 'Anotaciones de la clase de Cálculo',
        content: 'Tengo que estudiar las identidades trigonmétricas'
    },{
        title: 'Lista de compras',
        content: 'COMPRAR TODO LO QUE ME PAREZCA BARATO!'
    },{
        title: 'PELICULAS DE MARVEL QUE NO HE VISTO',
        content: 'Superman, Batman, Shazam...'
    },{
        title: 'Regalo del dia de la madre',
        content: 'Ayer vi una braga que creo que le queda a mi mamá'
    },{
        title: 'Chaquetas',
        content: 'Debo comentarle a Italo sobre su chaqueta de promo'
    },{
        title: 'Claves',
        content: 'Mercantil: ClaveSegura*. Banesco: 123123*'
    },{
        title: 'Mi segunda nota',
        content: 'Hoy la clase estuvo muy aburrida'
    },{
        title: 'Mi tercera nota',
        content: 'Hoy la clase estuvo neutral a decir la verdad'
    },{
        title: 'Mi quinta nota',
        content: 'Hoy ya perdí las notas de la cantidad que hice, espera KHE'
    }]
    await Note.create(notes);
}

export default { create };