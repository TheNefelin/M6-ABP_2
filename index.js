const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server Corriendo 3000");
});

app.get("/", (req, res) => {
    res.send("<div>Horoscopo</div>");
});

app.get("/zodiaco/:fecha", (req, res) => {
    const validar = validarFecha(req.params.fecha)
    res.send(validar[0] ? getZodiacoT(validar[1]) : validar[1]);
});

app.get("/astrologia-china/:fecha", (req, res) => {
    const validar = validarFecha(req.params.fecha)
    res.send(validar[0] ? getZodiacoC(validar[1]) : validar[1]);
});

function validarFecha(validar) {
    fecha = new Date(`${validar.slice(0, 4)}/${validar.slice(4, 6)}/${validar.slice(6, 8)}`);
    const html = `<div>La Fecha No es Valida</div>`

    return Date.parse(fecha) ? [true, fecha] : [false, html];
}

function getZodiacoT(fecha) {
    let html = "";

    zodiaco.forEach((e, index) => {
        const f1 = new Date(`${fecha.getFullYear()}/${e.min}`);
        index == 11 ? fecha.setFullYear(fecha.getFullYear() + 1) : false ;
        const f2 = new Date(`${fecha.getFullYear()}/${e.max}`);

        if (f1 <= fecha && f2 >= fecha) {
            html = `<div>${e.signoT}</div><p>${e.msge}</p>` 
        };
    });
    
    return html
};

function getZodiacoC(fecha) {
    const index = fecha.getFullYear() % 12;
    html = `<div>${zodiaco[index].signoC}</div><p>${zodiaco[index].msge}</p>` 

    return html
}

const zodiaco = [
    {signoT: "Acuario", signoC: "Mono", min: "01/21", max: "02/19", msge: "Es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema"},
    {signoT: "Piscis", signoC: "Gallo", min: "02/20", max: "03/20", msge: "Es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado"},
    {signoT: "Aries", signoC: "Perro", min: "03/21", max: "04/19", msge: "Forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas"},
    {signoT: "Tauro", signoC: "Cerdo", min: "04/20", max: "05/20", msge: "Pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas"},
    {signoT: "Géminis", signoC: "Rata", min: "05/21/", max: "06/20", msge: "Es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio"},
    {signoT: "Cáncer", signoC: "Buey", min: "06/21", max: "07/22", msge: "Es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora"},
    {signoT: "Leo", signoC: "Tigre", min: "07/23", max: "08/22", msge: "Es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos"},
    {signoT: "Virgo", signoC: "Conejo", min: "08/23", max: "09/22", msge: "Es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa"},
    {signoT: "Libra", signoC: "Dragón", min: "09/23", max: "10/22", msge: "Es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble"},
    {signoT: "Escorpio", signoC: "Serpiente", min: "10/23", max: "11/21", msge: "Es el símbolo de justicia, las Libra son personas que presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado; comprenden las posturas de los demás y al mismo tiempo procuran dirimir las diferencias. En general, no les gusta la rutina, sobre todo en su trabajo; además tienen una fina sensibilidad artística que pueden llegar a canalizar profesionalmente"},
    {signoT: "Sagitario", signoC: "Caballo", min: "11/22", max: "12/21", msge: "Pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña"},
    {signoT: "Capricornio", signoC: "Oveja", min: "12/22", max: "01/20", msge: "Es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible. También se caracteriza por ser prudente y práctico en todos los asuntos que le conciernen. Sus aspectos más negativos tienden hacia el pesimismo, la fijeza y la melancolía"},
];
