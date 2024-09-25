// PayPalButton.js
import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton({ amount, onPaymentSuccess }) {
  return (
    <div>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onPaymentSuccess(details);
          });
        }}
        onError={(err) => {
          console.error('PayPal Checkout Error:', err);
        }}
      />
    </div>
  );
}

export default PayPalButton;
