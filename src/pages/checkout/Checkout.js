

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CheckoutSuccess from './CheckoutSuccess';
// import stripePromise from './stripePromise';
// import { useAuth } from '../auth/context/auth';
// import { useCart } from '../cart/CartContext';
// import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';

// const Checkout = ({ shippingAddress, billingAddress, totalAmount, cart}) => {
//   console.log(billingAddress)
//   const { clearCart } = useCart();
//   const [isLoading, setIsLoading] = useState(false);
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   const userId = auth?.user?._id;

//   const handleSubmit = async (event, elements, stripe) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch('/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           amount: totalAmount, 
//           cart,
//           userId,
//           shippingAddress,
//           billingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Something went wrong');
//       }

//       const { orderId } = await response.json();
//       clearCart();

//       navigate('/CheckoutSuccess', { state: { orderId } });
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <ElementsConsumer>
//         {({ elements, stripe }) => (
//           <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//             <div>
//               {totalAmount}
//               <CardElement />
//               <button type="submit" disabled={isLoading}>
//                 {isLoading ? 'Processing...' : 'Pay'}
//               </button>
//             </div>
//           </form>
//         )}
//       </ElementsConsumer>
//     </Elements>
//   );
// };

// export default Checkout;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../auth/context/auth';
// import { useCart } from '../cart/CartContext';
// import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
// import stripePromise from './stripePromise';

// const Checkout = ({ shippingAddress, billingAddress, totalAmount }) => {
//   const { clearCart, cart } = useCart();
//   const [isLoading, setIsLoading] = useState(false);
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   const userId = auth?.user?._id;

//   const handleSubmit = async (event, elements, stripe) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:4242/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           amount: totalAmount, 
//           cartData: cart,
//           userId,
//           shippingAddress,
//           billingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Something went wrong');
//       }

//       const { orderId } = await response.json();
//       clearCart();

//       navigate('/CheckoutSuccess', { state: { orderId } });
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <ElementsConsumer>
//         {({ elements, stripe }) => (
//           <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//             <div>
//               {totalAmount}
//               <CardElement />
//               <button type="submit" disabled={isLoading}>
//                 {isLoading ? 'Processing...' : 'Pay'}
//               </button>
//             </div>
//           </form>
//         )}
//       </ElementsConsumer>
//     </Elements>
//   );
// };

// export default Checkout;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../auth/context/auth';
// import { useCart } from '../cart/CartContext';
// import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
// import stripePromise from './stripePromise';

// const Checkout = ({ shippingAddress, billingAddress, totalAmount }) => {
//   const { clearCart, cart } = useCart();
//   const [isLoading, setIsLoading] = useState(false);
//   const { auth } = useAuth();
//   const navigate = useNavigate();

//   const userId = auth?.user?._id;

//   const handleSubmit = async (event, elements, stripe) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:4242/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: totalAmount,
//           cartData: cart,
//           userId,
//           shippingAddress,
//           billingAddress,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Something went wrong');
//       }

//       const { clientSecret, orderId } = await response.json();

//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (paymentResult.error) {
//         throw new Error(paymentResult.error.message);
//       }

//       if (paymentResult.paymentIntent.status === 'succeeded') {
//         clearCart();
//         navigate('/CheckoutSuccess', { state: { orderId } });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <ElementsConsumer>
//         {({ elements, stripe }) => (
//           <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//             <div>
//             {totalAmount}
//               <CardElement />
//               <button type="submit" disabled={isLoading}>
//                 {isLoading ? 'Processing...' : 'Pay'}
//               </button>
//             </div>
//           </form>
//         )}
//       </ElementsConsumer>
//     </Elements>
//   );
// };

// export default Checkout;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context/auth';
import { useCart } from '../cart/CartContext';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import stripePromise from './stripePromise';

const Checkout = ({ shippingAddress, billingAddress, totalAmount, cartData }) => {
  const { clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const userId = auth?.user?._id;

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:4242/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          cartData: cartData,
          userId,
          shippingAddress,
          billingAddress,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const { clientSecret, orderId } = await response.json();

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        throw new Error(paymentResult.error.message);
      }

      if (paymentResult.paymentIntent.status === 'succeeded') {
        clearCart();
        navigate('/CheckoutSuccess', { state: { orderId } });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <div>
            {totalAmount}
              <CardElement />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Pay'}
              </button>
            </div>
          </form>
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default Checkout;
