"use client";

import Head from "next/head";
import {
  FetchTransactionStatus,
  GetChaptersByCourseID,
  PayWithPayPal,
  PayWithPelPay,
  PayWithStripe,
} from "../../../../utils/fetches/api.fetch";
import { Navbar } from "@/components";
import {
  ArrowLeft,
  PrinterIcon,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCallback, useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectPaymentOption } from "./_components/SelectPaymentOption";
import { useUserStore } from "@/store";

const PaymentOptionsPage = ({ params }: { params: { courseId: string } }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const token = useUserStore((state) => state.token);

  const { courseId } = params;

  const router = useRouter();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    chapters: [{
      title:"",
      description: "",
    }],
  });

  const QueryTransaction = useCallback(async () => {
    const load = {
      courseId: courseId,
      token,
    };
    const course = await GetChaptersByCourseID(load);
    setCourse(course.message);
  }, []);

  useEffect(() => {
    QueryTransaction();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Payment Options</title>
        <meta name="description" content="Payment options page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-9 px-5 w-full max-w-4xl mx-auto flex flex-col gap-4 lg:gap-8 lg:px-0">
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Go back</span>
        </div>

        <div className="w-full flex flex-col gap-4 lg:flex-row">
          {/* Course Details*/}
          <div className="w-full lg:w-[65%] border border-gray-400 rounded-[8px]">
            <h2 className="px-4 py-2 text-base font-bold flex items-center">
              <ShoppingCart size={16} className="mr-2 inline-block" />
              Cart
            </h2>
            <Separator className="w-full bg-gray-400" />

            <div className="px-4 py-2 w-full flex flex-col gap-3">
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm font-medium">Course Title: </p>
                <span className="font-normal text-sm text-right">
                  {course.title}
                </span>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm font-medium">Course Description: </p>
                <span className="font-normal text-sm text-right">
                  {course.description}
                </span>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-sm font-medium">Chapters:</p>

                <span className="text-sm font-normal text-right">
                  {course?.chapters?.length}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            <div className="w-full border border-gray-400 rounded-[8px]">
              <h2 className="px-4 py-2 text-base font-bold flex items-center">
                <PrinterIcon size={16} className="mr-2 inline-block" />
                Pricing
              </h2>
              <Separator className="w-full bg-gray-400" />
              <div className="w-full flex flex-row items-center justify-between gap-4 px-4 py-2">
                <p className="text-sm font-medium">Total: </p>
                <span className="font-normal text-sm">$99.9</span>
              </div>
            </div>
            {isDesktop ? (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  {/* <BuyCourseButton /> */}
                  <button
                    className="w-full px-3 py-2 text-sm bg-primary text-white font-medium rounded-lg"
                    type="button"
                    disabled={false}
                  >
                    Buy Course
                  </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] py-4 bg-white">
                  <DialogHeader>
                    <DialogTitle>Purchase a Course</DialogTitle>
                    <DialogDescription>
                      Select a payment method
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <SelectPaymentOption courseId={courseId} />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  {/* <BuyCourseButton /> */}
                  <button
                    className="w-full px-3 py-2 text-sm bg-primary text-white font-medium rounded-lg"
                    type="button"
                    disabled={false}
                  >
                    Buy Course
                  </button>
                </DrawerTrigger>
                <DrawerContent className="pb-7 bg-white">
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Purchase a Course</DrawerTitle>
                    <DrawerDescription>
                      select a payment method
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4">
                    <SelectPaymentOption courseId={courseId} />
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
      </div>

      {/* <main className="flex flex-col items-center">
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
      </main> */}

      <footer className="mt-auto py-4">
        <p className="text-sm text-gray-500">
          &copy; {`${new Date().getFullYear()}`} WebPips
        </p>
      </footer>
    </div>
  );
};

export default PaymentOptionsPage;
