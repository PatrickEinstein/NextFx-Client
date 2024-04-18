"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import {
  FetchTransactionStatus,
  GetChaptersByCourseID,
} from "../../../../utils/fetches/api.fetch";
import { useCallback, useEffect, useState } from "react";
import { useUserStore } from "@/store";
import { Check, X, ArrowRight } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useToast } from "@/components/ui/use-toast";

interface ScreenSize {
  width: number;
  height: number;
}

export default function ConfirmationPage({
  params,
}: {
  params: { transcationId: string };
}) {
  const { toast } = useToast();
  const { transcationId } = params;
  const token = useUserStore((state) => state.token);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  console.log(purchase);

  const QueryTransaction = useCallback(async () => {
    const transaction = await FetchTransactionStatus(transcationId, token);
    const load = {
      courseId: transaction.message.description,
      token,
    };
    const course = await GetChaptersByCourseID(load);

    console.log({
      transaction,
      course,
    });

    if (transaction.message === "Failed to fetch") {
      toast({
        variant: "destructive",
        title: "An Error occurred",
        description: transaction.message,
      });
      return;
    }

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

      <main className="flex flex-col items-center space-y-5">
        {purchase.state.length === 0 ? (
          <div>
            <div className="w-[64px] h-[64px] rounded-full p-2 bg-red-200 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-red-400 flex items-center justify-center">
                <X size={28} color="#fff" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-[64px] h-[64px] rounded-full p-2 bg-green-200 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-green-400 flex items-center justify-center">
                <Check size={28} color="#fff" />
              </div>
            </div>
            {isClient && purchase?.state?.length && (
              <Confetti
                width={window && window.innerWidth}
                height={window && window.innerHeight}
                tweenDuration={5000}
              />
            )}
          </div>
        )}

        <h1 className="text-xl font-bold text-gray-800">
          Payment {purchase.state?.toUpperCase() || "DECLINED"}
        </h1>
        <p className="text-base text-gray-600 text-center">
          {" "}
          Dear{" "}
          {purchase.lastName.length > 0 || purchase.firstName.length > 0
            ? `${purchase?.lastName + " " + purchase?.firstName}`
            : "Customer"}{" "}
          ,{" "}
          {purchase.lastName.length > 0 || purchase.firstName.length > 0
            ? "Thank you for your purchase."
            : "Your purchase failed, Please try again"}
        </p>
        <p className="text-5xl font-bold"> {course.title}</p>
        {purchase.state.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: "24px" }}
            >
              {purchase.state}
            </motion.div>
          </div>
        )}
        {purchase.state.length > 0 && (
          <div className="border border-gray-300 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Order Details:
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Order ID:</span> {purchase.id}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Amount:</span> {purchase.amount}{" "}
              USD
            </p>
            <p className="text-gray-600">
              {/* <span className="font-semibold">Date:</span> {purTime} */}
            </p>
          </div>
        )}
        <Link href="/" className="px-4 py-2 rounded-lg bg-gray-200">
          Back to Home <ArrowRight size={16} className="inline-block ml-2" />
        </Link>
      </main>
    </div>
  );
}
