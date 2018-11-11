// Create an instance of the Stripe object by providing your publishable API key as the first parameter:

const stripe = Stripe('pk_test_6NYicpFdu57wxYzvstuhAWUL', {betas: ['checkout_beta_2']});

// Finally, when your customer is ready to pay, call redirectToCheckout to begin the checkout process. 
// The following code invokes redirectToCheckout in a button click event handler:

const checkoutButton = document.getElementById('checkout-button');

document.addEventListener('DOMContentLoaded', function() {

	checkoutButton.addEventListener('click', async () => {
	  // Redirect your customer to Checkout.
	  const {error} = await stripe.redirectToCheckout({
	    items: [
	      {
	        type: 'sku',
	        id: 'sku_DmXInw7aBJR6Wn', // replace with the ID of your SKU
	        quantity: 1,
	      },
	    ],
	    successUrl: 'https://downrightsocial.com/success.html',
	    cancelUrl: 'https://downrightsocial.com/canceled.html',
	  });

	  if (error) {
	    // If `redirectToCheckout` fails due to a browser or network error,
	    // display the localized error message to your customer.
	    const displayError = document.getElementById('error-message');
	    displayError.textContent = error.message;
	  }
	});

});