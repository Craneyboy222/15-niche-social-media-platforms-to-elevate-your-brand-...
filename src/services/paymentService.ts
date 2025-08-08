import Stripe from 'stripe';

class PaymentService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  async createCharge(amount: number, currency: string, source: string, description: string) {
    try {
      const charge = await this.stripe.charges.create({
        amount,
        currency,
        source,
        description,
      });
      return charge;
    } catch (error) {
      console.error('Payment error:', error);
      throw error;
    }
  }
}

export default new PaymentService();