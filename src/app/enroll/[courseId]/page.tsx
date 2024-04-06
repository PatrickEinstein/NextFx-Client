"use client";
import Head from "next/head";
import {
  PayWithPayPal,
  PayWithPelPay,
  PayWithStripe,
} from "../../../../utils/fetches/api.fetch";

const PaymentOptionsPage = ({ params }: { params: { courseId: string } }) => {
  const { courseId } = params;

  const PayPal = async () => {
    const pay = await PayWithPayPal({ descriptions: courseId });
    console.log(`paypal`, pay);
    if (pay.status === true) {
      window.location.href = pay.message;
    }
  };

  const PayStripe = async () => {
    const pay = await PayWithStripe();
    console.log(`paystripe`, pay);
    if (pay.status === true) {
      window.location.href = pay.message;
    }
  };
  const PelPay = async () => {
    const pay = await PayWithPelPay({ descriptions: courseId });
    console.log(`pelpay`, pay);
    if (pay.status === true) {
      window.location.href = pay.message;
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Payment Options</title>
        <meta name="description" content="Payment options page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Select Payment Method</h1>
        <div className="flex flex-col justify-items-center align-middle space-y-4">
          <h3
            onClick={PayStripe}
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out text-center"
          >
            Pay with Stripe
          </h3>

          <h3
            onClick={PayPal}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 cursor-pointer ease-in-out text-center"
          >
            Pay with PayPal
          </h3>

          <h3
            onClick={PelPay}
            className="bg-green-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out text-center"
          >
            Pay with PelPay
          </h3>
        </div>
      </main>

      <footer className="mt-auto py-4">
        <p className="text-sm text-gray-500">&copy; 2024 WebPips</p>
      </footer>
    </div>
  );
};

export default PaymentOptionsPage;
