document.addEvent('turbolink:load', function() {
  const public_key = document.querySelector('meta[name="stripe-public-key"]').content;
  const stripe = Stripe(public_key);
  const elements = stripe.elements();

  const style = {
    base; {
      color: '#32325d',
      lineHeight: '32px',
      fontFamily: '"Helvetica Neue", Helevetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '18px',
      '::placeholder': {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "fa755a"
    }
  };

  const card = elements.create('card', {style: style});

  card.mount("#card-element");

  card.addEventListener('change', ({errors} => {
    const displayError = document.getElementById('card-errors');
    if (error) {
      displayError.textContent = error.message;

    } else {
      {
        displayError.textContent = "";
      }
    }
  }))
const form = document.getElementById('new_job')
});
