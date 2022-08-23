 /*EL SIGUIENTE PROGRAMA REALIZARA CONVERSIONES DE MONEDA, DE PESOS ARGENTINOS A ( DOLAR BLUE, EURO, REAL, PESOS URUGUAYOS, PESOS COLOMBIANOS). Se podra iterar 10 empleados , ingresaran su apellido y legajo , el mismo puede realizar todas las conversiones que desee siempre de pesos argentinos en alguna moneda extranjera, el sistema mostrara quien esta realizando la operacion y le informara sobre su conversion*/

 alert("Conversiones de Moneda");
 alert("Se solicitara al usuario que ingrese su monto en Pesos Argentinos mayor o igual a 10000, luego elegira una de las siguientes opciones: 1 Dolar, 2 Euro, 3 Real, 4 Pesos Uruguayos, 5 Pesos Colombianos");

for(let i=1;i<=10;i++){
    var respuesta="SI";
    var pesosArg=parseFloat(prompt("Ingrese los pesos argentinos que desea cambiar"));

    while((pesosArg<10000) && (respuesta=="SI")){
        
        alert("Debe ingresas un monto mayor o igual a 10000 pesos argentinos");
        respuesta=prompt("Desea continuar la operacion de convertir pesos Argentinos en alguna moneda extranjera? responda :SI o NO").toUpperCase();
        if (respuesta=="SI"){
            pesosArg=parseFloat(prompt("Ingrese los pesos argentinos que desea cambiar"));
            
        }

    }
        
    if(pesosArg>=10000){
        var nombre=prompt("ingrese apellido").toUpperCase();
        var legajo=prompt("ingrese legajo");
        
    }

    /*el while iterara todas las veces que el usuario desee convertir es por eso que se le preguntara si desea continuar y en tal caso que ingrese el monto*/
        while ((respuesta=="SI") && (pesosArg>=10000)){
            alert("Se encuentra operando el empleado: "+nombre + " con legajo: "+legajo);
            let moneda=parseInt(prompt("Ingrese un numero para indicar moneda de cambio: 1 dolar, 2 euro, 3 real, 4 Pesos uruguayo, 5 Pesos Colombianos"));
            let cambio=0;
                    switch (moneda){
                        /*las conversiones son extraidas de un apagina web sin impuestos, es a modo de iteracion*/
                        case 1:
                            console.log("Usted eligio cambiar Pesos Argentinos a Dolar Blue");
                            cambio=pesosArg*0.0073;
                            alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " dolares");
                        break;
    
                        case 2:
                            console.log("Usted eligio cambiar Pesos Argentinos a Euro");
                            cambio=pesosArg*0.0074;
                            alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " Euro");
                        break;
    
                        case 3:
                            console.log("Usted eligio cambiar Pesos Argentinos a Real");
                            cambio=pesosArg*0.0028;
                            alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " Real");
                        break;
    
                        case 4:
                            console.log("Usted eligio cambiar Pesos Argentinos a Pesos Uruguayos");
                            cambio=pesosArg*0.30;
                            alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " Pesos Uruguayos");
                        break;
    
                        case 5:
                            console.log("Usted eligio cambiar Pesos Argentinos a Pesos Colombianos");
                            cambio=pesosArg*32.20;
                            alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " Pesos Colombianos");
                        break;

                        default:
                            alert("ingresaste la opcion incorrecta");
                        break;
                    }

            respuesta=prompt("Desea continuar la operacion de convertir pesos Argentinos en alguna moneda extranjera? responda :SI o NO").toUpperCase();
            if (respuesta=="SI"){
                pesosArg=parseFloat(prompt("Ingrese los pesos argentinos que desea cambiar"));

                while(pesosArg<10000 ){
                    alert("Debe ingresas un monto mayor o igual a 10000 pesos argentinos");
                    respuesta=prompt("Desea continuar la operacion de convertir pesos Argentinos en alguna moneda extranjera? responda :SI o NO").toUpperCase();
                    if (respuesta=="SI"){
                            pesosArg=parseFloat(prompt("Ingrese los pesos argentinos que desea cambiar"));
                        }
                
                }
            }
        }
        
        


    while(pesosArg<10000 && respuesta=="SI"){
        
        alert("Debe ingresas un monto mayor o igual a 10000 pesos argentinos");
        respuesta=prompt("Desea continuar la operacion de convertir pesos Argentinos en alguna moneda extranjera? responda :SI o NO").toUpperCase();
        if (respuesta=="SI"){
                pesosArg=parseFloat(prompt("Ingrese los pesos argentinos que desea cambiar"));
            }
    
    }
    
    
    
    
}  
            

    
        
    

    
    

        
 
    
    
    /*if (moneda==1){
        console.log("Usted eligio cambiar Pesos Argentinos a Dolar Blue");
        cambio=pesosArg/195;
        alert("los pesos argentinos: " + pesosArg +" son "+ cambio + " dolares");
    }else{
        if(moneda==2){
            console.log("Usted eligio cambiar Pesos Argentinos a Euro");
            cambio=pesosArg/240;
            alert( pesosArg + " pesos argentinos:" +" son "+ cambio + " euro");
        }

    }*/
        

    
        
    


    

