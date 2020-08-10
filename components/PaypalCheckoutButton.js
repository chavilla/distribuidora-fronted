import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const myApp=({order})=> {

    //console.log(order);

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


    const payment = (data, actions) => {
      const payment = {
        transactions: [
          {
            amount: {
              total: parseInt(order.total),
              currency: paypalConf.currency,
            },
            description: order.name,
            custom: order.customer || '',
            item_list: {
              items: order.items
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
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

   

    
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <PaypalExpressBtn
        env={paypalConf.env}
        client={paypalConf.client}
        currency={paypalConf.currency}
        total={parseInt(order.total)}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={paypalConf.style}
      />
    );
}

export default myApp;