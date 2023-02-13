/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
    const VALORXUNIDAD=35;
    let precioFinal;
    let marca;
    let IIBB;
    let descuento;
   
    
    cantidad=document.getElementById("txtIdCantidad").value;
    cantidad=parseInt(cantidad);
    precioFinal=parseFloat(precioFinal);
    descuento=parseFloat(descuento);
    IIBB=parseFloat(IIBB);
    IIBB=(cantidad*VALORXUNIDAD)*10/100;
    marca=document.getElementById("Marca").value;
    
    

    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. // 

    if (cantidad >=6)
    {   
       descuento=(VALORXUNIDAD*cantidad)*50/100;
       precioFinal= (cantidad*VALORXUNIDAD) - descuento;
    }
    //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % //
    else if (cantidad==5)
    {
            if(marca=="ArgentinaLuz")
            {            
            descuento=(VALORXUNIDAD*cantidad)*40/100;
            precioFinal= (cantidad*VALORXUNIDAD) - descuento;
                                    
            }
              //y si es de otra marca el descuento es del 30%.//
               else {
            descuento=(VALORXUNIDAD*cantidad)*30/100;
            precioFinal= (cantidad*VALORXUNIDAD) - descuento;
                     }

    }
    else if(cantidad==4) 
    {
        // Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % //
         
    
            if (marca=="ArgentinaLuz" || marca== "FelipeLamparas")
            {
               descuento=(VALORXUNIDAD*cantidad)*25/100;
               precioFinal= (cantidad*VALORXUNIDAD) - descuento;

            }
            else {
               descuento=(VALORXUNIDAD*cantidad)*20/100;
               precioFinal= (cantidad*VALORXUNIDAD) - descuento;
                  }
     } 
         //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,//
         if (cantidad==3 && marca=="ArgentinaLuz")
             {
                descuento=(VALORXUNIDAD*cantidad)*15/100;
                precioFinal= (cantidad*VALORXUNIDAD) - descuento;
               
             }
             
            // si es  “FelipeLamparas” se hace un descuento del 10 %//
    else if (cantidad==3 && marca=="FelipeLamparas")
    {
                                   
                      descuento=(VALORXUNIDAD*cantidad)*10/100;
                      precioFinal= (cantidad*VALORXUNIDAD) - descuento;
                 
                    // si es de otra marca un 5%.//
    }
               if (cantidad ==3 && marca!="FelipeLamparas" && marca!="ArgentinaLuz")
               {
                  descuento=(VALORXUNIDAD*cantidad)*5/100;
                  precioFinal= (cantidad*VALORXUNIDAD) - descuento;
               }

             // E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
             //”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. //
               
               if (precioFinal>120)
               {
                precioFinal= precioFinal+IIBB;
                
                alert("Usted pago $"+IIBB+" de IIBB");
               }
             document.getElementById("txtIdprecioDescuento").value = precioFinal;         
 
 }

            
           
          

    