
let gastos = JSON.parse(localStorage.getItem("gastos")) || []

function registrar (){
    let inputValor = document.getElementById("valor")

    let inptGasto = document.getElementById("gasto")

    let inputCategoria = document.getElementById("categoria")

    let valor = inputValor.value;
    let gasto = inptGasto.value;
    let categoria = inputCategoria.value;

    if(valor === "" || gasto === ""){
        alert("campo fazio")
        return
    }
    gastos.push({
        gasto: gasto,
        valor: Number(valor),
        categoria: categoria
    })

    inptGasto.value = "";
    inputValor.value = "";
    

    salvar()
    mostra(gastos)
}

function mostra(gastos){
    let conteiner = document.getElementById("lista")

    conteiner.innerHTML = "";

    gastos.forEach((item, index) => {
        let card = document.createElement("div")

        card.innerHTML = `
        <div class="info">
        <h2> R$:${item.valor}</h2>

        <P>${item.gasto}</p>

        <p>${item.categoria}</p>

        ${item.valor > 200 ? '<span>gasto alto</span>' : ''}

        </div>
        <div>
        <button onclick="remover(${index})">❌</button>
        </div>
        `;
        conteiner.appendChild(card)

    })
}
function saldo (){
    let inputSalario = document.getElementById("salario")

     let salario = Number(inputSalario.value)

     let total = 0

     gastos.forEach(item => {
        total += item.valor
     });

     let restante = salario - total;

     document.getElementById("saldo")
     innerHTML = "saldo R%:" + restante
}


function  buscar (){
    let texto = document.getElementById("buscar").value

    let filtrado = gastos.filter(item => 
        item.gasto
        .includes(texto)
    )  
    mostra(filtrado)
}




function remover(index){
    gastos.splice(index, 1)

    salvar()
    mostra(gastos)
    saldo()
}
function salvar(){
    localStorage.setItem("gastos", JSON.stringify(gastos))
}
mostra(gastos)
