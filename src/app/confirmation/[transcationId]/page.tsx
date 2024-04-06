"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import {
  FetchTransactionStatus,
  GetChaptersByCourseID,
} from "../../../../utils/fetches/api.fetch";
import { useCallback, useEffect, useState } from "react";

export default function ConfirmationPage({
  params,
}: {
  params: { transcationId: string };
}) {
  const { transcationId } = params;

  const [purchase, setPurchase] = useState({
    state: "",
    firstName: "",
    lastName: "",
    amount: "",
    id: "",
    createTime: "",
  });
  const purTime = new Date(purchase.createTime);
  const [course, setCourse] = useState({
    title: "",
  });


  const QueryTransaction = useCallback(async () => {
    const transaction = await FetchTransactionStatus(transcationId );
    const load = {
      courseId: transaction.message.description,
    };
    const course = await GetChaptersByCourseID(load);

    console.log({
      transaction,
      course,
    });
    setPurchase(transaction.message);
    setCourse(course.message);
  }, []);

  useEffect(() => {
    QueryTransaction();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Payment Confirmation</title>
        <meta name="description" content="Payment confirmation page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-600">
          {" "}
          Dear {purchase.lastName + "" + purchase.firstName}, Thank you for your
          purchase.
        </p>
        <p className="text-5xl font-bold"> {course.title}</p>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "24px" }}
          >
            {purchase.state}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ fontSize: "48px", color: "green" }}
          >
            &#10004;
          </motion.div>
        </div>
        <div className="border border-gray-300 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Order Details:
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold">Order ID:</span> {purchase.id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Amount:</span> {purchase.amount} USD
          </p>
          <p className="text-gray-600">
            {/* <span className="font-semibold">Date:</span> {purTime} */}
          </p>
        </div>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
