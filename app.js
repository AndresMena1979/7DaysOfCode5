let preguntaAgregarAlimento=""; //varaible para las preguntas al usuario
let AlimentoParaAgregar=""  
let categoriaDelAlimento=""
let carnes=[];                //variable array para guardar las listas de las compras segun su categoria
let frutas=[];
let verduras=[];
let lacteos=[];







while (preguntaAgregarAlimento !== "no"){                   // while se ejecuta mientras preguntaAgregaAlimento sea diferente de "no"

    console.log(preguntaAgregarAlimento);

    preguntaAgregarAlimento = prompt("Deseas agregar un alimento a tu lista de compras? responde si o no");   // pergunta donde el usuario debera escribir si o no

    if (preguntaAgregarAlimento=="si"){                   // si el usuario escribe que "si" entonces se le realiza las siguientes preguntas

        AlimentoParaAgregar= prompt("que alimento deseas agregar, escribelo por favor");    // captura del alimento escrito por el usuario

        categoriaDelAlimento=prompt("En que categoria encaja este alimento: carnes,verduras,frutas,lacteos?") //captura de la categoria del alimento, escrita por el usuario

    switch (categoriaDelAlimento) {                     //switch para clasificar los alimentos segun las categorias escrita por el usuario
        case "carnes":
            carnes.push(AlimentoParaAgregar);
            break;
        case "frutas":
            frutas.push(AlimentoParaAgregar);
            break;
        case "verduras":
            verduras.push(AlimentoParaAgregar);
            break;
        case "lacteos":                           
            lacteos.push(AlimentoParaAgregar);
            break;
        default:
            alert("Categoría inválida. Intenta de nuevo.");
    }



} 

  
}

if (preguntaAgregarAlimento==="no"){     // Si el usuario decidio no digitar mas productos de la lista se genera mensaje que indica terminada la lista

    alert("Has terninado tu lista");

  }
  console.log("Lista de compras:");
  console.log("Carnes:", carnes.length > 0 ? carnes.join(", ") : "No hay carnes");   // uso del operador ternario para ver si hay articulos digitados o no, si los hay se imprimen y se separan por comas usando join, si no los hay se imprime la leyenda "No hay..."
  console.log("Frutas:", frutas.length > 0 ? frutas.join(", ") : "No hay frutas");
  console.log("Verduras:", verduras.length > 0 ? verduras.join(", ") : "No hay verduras");
  console.log("Lácteos:", lacteos.length > 0 ? lacteos.join(", ") : "No hay lácteos");