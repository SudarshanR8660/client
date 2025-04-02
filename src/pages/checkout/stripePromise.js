import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P0g2wRsTKiTtWc7seGHyYHP54QDKVkp0UEmqa9d4Nboq2sBh9iIkJS1Lri9qZ9VHIqWWUcsjTlGqElGLw2DF7tw00wyDlUYI9');

export default stripePromise;