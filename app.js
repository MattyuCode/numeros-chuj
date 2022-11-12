//test
const select = document.querySelectorAll('.listados select'),
    input = document.querySelector('#texto'),
    alertDanger = document.querySelector('.alDanger'),
    form = document.querySelector('form');

// const numerosChuj = {
//     1: "Jun",
//     2: "Cha’ab’",
//     3: "Oxe’",
//     4: "Chanhe’",
//     5: "Hoye’",
//     6: "Wake’",
//     7: "Huke’",
//     8: "Wajxake’",
//     9: "B’alunhe’",
//     10: "Lajunhe’",
//     11: "Huxluche'",
//     12: "Lajchawe'",
//     13: "Oxlajunhe'",
//     14: "Chanhlajunhe'",
//     15: "Holajunhe'",
//     16: "Waklajunhe'",
//     17: "Huklajunhe'",
//     18: "Wajxaklajunhe'",
//     19: "B’Alunhlajunhe'",
//     20: "Junwinak",
//     21: "Jun xchawinak",
//     22: "Chab’ xchawinak",
//     23: "Oxe xchawinak",
//     24: "Chanhe xchawinak",
//     25: "Hoye’ xchawinak",
//     26: "Wake xchawinak",
//     27: "Huke xchawinak",
//     28: "Wajxake xchawinak",
//     29: "B’alunhe xchawinak",
//     30: "Lajunhe'xchawinak"
// }

const numerosChujEnLetras = [{
        id: 1,
        name: "Ju'un"
    },
    {
        id: 2,
        name: "Cha’ab’"
    },
    {
        id: 3,
        name: "Oxe’"
    },
    {
        id: 4,
        name: "Chanhe’"
    },
    {
        id: 5,
        name: "Hoye’"
    },
    {
        id: 6,
        name: "Wake’"
    },
    {
        id: 7,
        name: "Huke’"
    },
    {
        id: 8,
        name: "Wajxake’"
    },
    {
        id: 9,
        name: "B’alunhe’"
    },
    {
        id: 10,
        name: "Lajunhe’"
    },
    {
        id: 11,
        name: "Huxluche'"
    },
    {
        id: 12,
        name: "Lajchawe'"
    },
    {
        id: 13,
        name: "Oxlajunhe'"
    },
    {
        id: 14,
        name: "Chanhlajunhe'"
    },
    {
        id: 15,
        name: "Holajunhe'"
    },
    {
        id: 16,
        name: "Waklajunhe'"
    },
    {
        id: 17,
        name: "Huklajunhe'"
    },
    {
        id: 18,
        name: "Wajxaklajunhe'"
    },
    {
        id: 19,
        name: "B’Alunhlajunhe'"
    },
    {
        id: 20,
        name: "Junwinak"
    },
    {
        id: 21,
        name: "Jun xchawinak"
    },
    {
        id: 22,
        name: "Chab’ xchawinak"
    },
    {
        id: 23,
        name: "Oxe xchawinak"
    },
    {
        id: 24,
        name: "Chanhe xchawinak"
    },
    {
        id: 25,
        name: "Hoye’ xchawinak"
    },
    {
        id: 26,
        name: "Wake xchawinak"
    },
    {
        id: 27,
        name: "Huke xchawinak"
    },
    {
        id: 28,
        name: "Wajxake xchawinak"
    },
    {
        id: 29,
        name: "B’alunhe xchawinak"
    },
    {
        id: 30,
        name: "Lajunhe' xchawinak"
    },
    {
        id: 31,
        name: "Huxluche xchawinak"
    },
    {
        id: 32,
        name: "Lajchawe xchawinak"
    },
    {
        id: 33,
        name: "Oxlajunhe xchawinak"
    },
    {
        id: 34,
        name: "Chanhlajunhe xchawinak"
    },
    {
        id: 35,
        name: "Holajunhe xchawinak"
    },
    {
        id: 36,
        name: "Waklajunhe xchawinak"
    },
    {
        id: 37,
        name: "Huklajunhe xchawinak"
    },
    {
        id: 38,
        name: "Wajxaklajunhe xchawinak"
    },
    {
        id: 39,
        name: "B'alunhlajunhe xchawinak"
    },
    {
        id: 40,
        name: "Chawinak"
    },
    {
        id: 41,
        name: "Jun yoxwinak"
    },
    {
        id: 42,
        name: "chab' yoxwinak"
    },
    {
        id: 43,
        name: "oxe yoxwinak"
    },
    {
        id: 44,
        name: "chanhe yoxwinak"
    },
    {
        id: 45,
        name: "Hoye yoxwinak"
    },
    {
        id: 46,
        name: "Wake yoxwinak"
    },
    {
        id: 47,
        name: "Huke yoxwinak"
    },
    {
        id: 48,
        name: "Waklajunhe yoxwinak"
    },
    {
        id: 49,
        name: "B'alunhe yoxwinak"
    },
    {
        id: 50,
        name: "Lajunhe yoxwinak"
    },
    {
        id: 51,
        name: "Huxluche yoxwinak"
    },
    {
        id: 52,
        name: "Lajchawe yoxwinak"
    },
    {
        id: 53,
        name: "Oxlajunhe yoxwinak"
    },
    {
        id: 54,
        name: "Chanhlajunhe yoxwinak"
    },
    {
        id: 55,
        name: "Holajunhe yoxwinak"
    },
    {
        id: 56,
        name: "Wajxake yoxwinak"
    },
    {
        id: 57,
        name: "Huklajunhe yoxwinak"
    },
    {
        id: 58,
        name: "Wajxaklajunhe yoxwinak"
    },
    {
        id: 59,
        name: "B'alunhlajunhe yoxwinak"
    },
    {
        id: 60,
        name: "Oxwinak"
    }

]

select.forEach(item => {
    // for (let key in numerosChujEnLetras) { // FOR IN = para ver los index del array y en objeto sale propiedades
    for (let key of numerosChujEnLetras) { // FOR OF = para ver los valores del array (key.id)

        // let optionTag = `<option value="${key}">${key}</option>`;
        // item.insertAdjacentHTML("beforeend", optionTag);

        // console.log(key.id);
        let optionTag = `<option value="${key.id}">${key.id}</option>`;
        item.insertAdjacentHTML("beforeend", optionTag);
    }

});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Number(e.currentTarget.numbersList.value);

    if (isNaN(id)) {
        console.log("Por favor seleccione un numero");
        input.classList.add("is-invalid");
        alertDanger.classList.add("invalid-feedback");
        alertDanger.innerHTML = "Por favor seleccione un número para traducir";
        return;
    }
    input.classList.remove("is-invalid");
    alertDanger.classList.remove("invalid-feedback");
    alertDanger.innerHTML = " ";
    // const findIndex = numerosChujEnLetras.findIndex(item => item.id === id); //findIndex solo encuentra en que posicion esta -> index
    // console.log("findIndex", findIndex);

    const finalData = numerosChujEnLetras.find(item => item.id === id); // devuelve el valor asigando o lo que queremos encontrar
    // console.log("FIND", finalData);
    document.querySelector('#texto').value = finalData.name;
});