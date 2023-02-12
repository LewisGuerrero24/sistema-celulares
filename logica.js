var celulares = [{MOTOROLA:[]},{SAMSUNG:[]},{IPHONE:[]},{HUAWEI:[]},{XIAOMI:[]},{OPPO:[]}];
var recaudo = []

function registrar(){
    var modelos = {model: null, cantidad: null,precios:null}
    marca = document.getElementById("marca").value;
    modelo= document.getElementById("modelo").value;
    cantidad= Number(document.getElementById("cantidad").value);
    precio = Number(document.getElementById("precio").value);
    modelos.cantidad = cantidad;
    modelos.model = modelo.trim().toUpperCase();
    modelos.precios = precio;
    
    MarcaEquipo(marca.trim().toUpperCase(), modelos);
    inventario();
    formulario.reset();
}


function MarcaEquipo(marca, modelos){
    switch(marca){
        case "MOTOROLA":
            celulares[0].MOTOROLA.push(modelos);
            break;
        case "SAMSUNG":
            celulares[1].SAMSUNG.push(modelos);
            break;
        case "IPHONE":
            celulares[2].IPHONE.push(modelos);
            break;
        case "XIAOMI":
            celulares[4].XIAOMI.push(modelos);
            break;
        case "OPPO":
            celulares[5].OPPO.push(modelos);
            break;
        case "HUAWEI":
            celulares[3].HUAWEI.push(modelos); 
            break;   
    }
}

function inventario(){
    var d =celulares.length;
    
    var tab = `<h1>INVENTARIO</h1>`;
   for(let j = 0; j < d ;j++){
        var num = 0;
        tab += `<table border="1" Style="border-collapse: collapse; border-color: black ; text-align: center; margin: 10px"><caption style=" font-family: Arial, Helvetica, sans-serif;  font-weight: bolder">${Object.keys(celulares[j])}</caption> <tr> 
        <th>MODELO</th> <th>CANTIDAD</th> <th>PRECIO</th></tr> `;
        num = (celulares[j][Object.keys(celulares[j])]).length;
       
        for(let i = 0; i < num; i++){


                    tab += `<tr>
                    <td>${celulares[j][Object.keys(celulares[j])][i][`model`]}</td>
                    <td>${celulares[j][Object.keys(celulares[j])][i][`cantidad`]}</td>
                    <td>${celulares[j][Object.keys(celulares[j])][i][`precios`]}</td>
                    </tr> `;
                    
       }       
         tab+=`</table>`;
        
    }
   
    return document.getElementById("tabla").innerHTML= tab; 
   
}

function ventas(){
   
    marca = document.getElementById("marca2").value;
    modelo= document.getElementById("modelo2").value;
    cantidad= Number(document.getElementById("cantidad2").value);
    devolverdatos(marca.trim().toUpperCase(),modelo.trim().toUpperCase(),cantidad);
    caja();
    formulario2.reset();
    
}

function devolverdatos(marca,modelo,cantidad){
    entradas = {marcas: null,modelos: null, cantidad: null, valorventa: null}
    for(let i = 0; i < celulares.length;i++){
        
        if( Object.keys(celulares[i]) == marca){
            
            num = (celulares[i][Object.keys(celulares[i])]).length;
       
            for(let j = 0; j < num; j++){   

            if(celulares[i][Object.keys(celulares[i])][j][`model`] == modelo){
                    var p = 0;
                    p=Number(celulares[i][Object.keys(celulares[i])][j][`precios`]);
                    c = celulares[i][Object.keys(celulares[i])][j][`cantidad`];
                    celulares[i][Object.keys(celulares[i])][j][`cantidad`] = c - cantidad;
                    total = p*cantidad;
                    entradas.marcas = marca;
                    entradas.modelos = modelo;
                    entradas.cantidad = cantidad;
                    entradas.valorventa = total;
                    recaudo.push(entradas);
                    console.log(recaudo);
                   return document.getElementById("tpagar").innerHTML= total ; 
                   

            }
        
        }


        }
    }

    
}

function caja(){
    var l =recaudo.length;
    var cont = 0;
    var cot = ``;
    cot += `<h1>CAJA</h1><table border="1" Style="border-collapse: collapse; border-color: black ; text-align: center; margin: 10px"> <tr> 
        <th>MARCA</th> <th>MODELO</th> <th>CANTIDAD</th> <th>TOTAL PAGADO</th> </tr> `;
        for(let j = 0; j < l ;j++){
                cont += recaudo[j][`valorventa`];
                cot += `<tr>
                <td>${recaudo[j][`marcas`]}</td>
                <td>${recaudo[j][`modelos`]}</td>
                <td>${recaudo[j][`cantidad`]}</td>
                <td>${recaudo[j][`valorventa`]}</td>
                </tr> `;                    
                
            }
    cot += `<tr>
    <td>Total recaudo:</td>
    <td></td>
    <td></td>
    <td>${cont}</td>
    </tr>
    </table>`;
    return document.getElementById("tabla2").innerHTML= cot; 
}