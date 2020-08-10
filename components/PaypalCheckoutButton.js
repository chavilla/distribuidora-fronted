import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import CarritoContext from "../context/carrito/carritoContext"; 

const myApp=({order})=> {

    //--------------- Zona para leer los contex---------------------------//
    const {setSale}=useContext(CarritoContext);


    // --------------- En esta zona hacemos de los item un array
    let array_name=[];
    order.items.map(item=>{
      array_name.push(item.name);
    });

    //------------------En esta zona configuramos paypal
    const paypalConf = {
      currency: 'USD',
      env: 'sandbox',
      client : {
        sandbox: "AXIWql_si3snZGZPEMLDg0ACaaqDqrSDIWZ3aHghfHBZH6RI4KafbXR3YvY50NZJ8C8TPrLpmu_JHacw",
        production: "id",
      },
      style: {
        label: 'pay',
        size: 'medium', // small | medium | large | responsive
        shape: 'rect',   // pill | rect
        color: 'blue',  // gold | blue | silver | black
      },
    };


    // ------------------- Esta zona cea un pago o payment
    const payment = (data, actions) => {
      const payment = {
        transactions: [
          {
            amount: {
              total: parseInt(order.total),
              currency: paypalConf.currency,
            },
            description: array_name.toString(),
            custom: order.items[0].userId,
            item_list: {
              items: [order.items]
            },
          },
        ],
        note_to_payer: 'Contáctanos para cualquier aclaración sobre tu compra.',
      };
  
      // console.log(payment);
      return actions.payment.create({
        payment,
      });
    };

    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);

      const sale={
        payment: payment.paymentID,
        products: array_name.toString(),
        userId: order.items[0].userId,
        total: order.total
      }
      
      setSale(sale);
      
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
    };

    return (
      <PaypalExpressBtn
        env={paypalConf.env}
        payment={(data, actions) => payment(data, actions)}
        client={paypalConf.client}
        currency={paypalConf.currency}
        total={parseInt(order.total)}
        commit
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={paypalConf.style}
      />
    );
}

export default myApp;