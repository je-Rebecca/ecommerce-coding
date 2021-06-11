import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51IvxI9BWIjn6kM5hPCmtJ9oaFbWGzsl9YeLnZGMlVRelWPm9tJVXr2M2y2L79LJdy8IYAchebI93u431IlKMs4RA00Rr9o3UQv';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      bbillingaddress
      shippingAddress
      // image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
