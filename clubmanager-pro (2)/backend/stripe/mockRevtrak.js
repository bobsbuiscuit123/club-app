// stripe/mockRevTrak.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(req, res) {
  const { amount, description } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price_data: {
        currency: 'usd',
        product_data: { name: description },
        unit_amount: amount,
      }, quantity: 1 }],
    mode: 'payment',
    success_url: req.headers.origin + '/success',
    cancel_url: req.headers.origin + '/cancel',
  });
  res.json({ url: session.url });
}

module.exports = { createCheckoutSession };
