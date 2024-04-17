"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownIcon,
  ArrowUpIcon,
  Heart,
  Reply,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TopicPage = () => {
  const [showReplies, setShowReplies] = useState(false);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [value, setValue] = useState("");

  return (
    <div className="w-full px-5">
      {/*Header*/}
      <div className="w-full flex flex-col gap-2 mb-7">
        <h1 className="text-2xl font-bold">
          About the Beginner Questions Category
        </h1>
        <div className="flex flex-row items-center gap-1">
          <div className="h-[14px] w-[14px] bg-primary"></div>
          <span className="text-sm font-normal">Beginner Questions</span>
        </div>
      </div>

      {/*Topic*/}
      <div className="border-y border-[#EFEFEF] py-4 w-full flex flex-row gap-2 max-w-[80%] mx-auto">
        {/*Topic Image*/}
        <Avatar className="">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="user pic" /> */}
          <AvatarFallback className="!text-primary">SH</AvatarFallback>
        </Avatar>

        {/*Topic Content*/}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">
            Welcome to the Beginner Questions
          </h2>
          <p className="text-sm font-normal">
            This category is for those who are new to trading and have questions
            about trading strategies, trading platforms, and other
            trading-related topics.
          </p>
          <div className="mt-4 w-full flex flex-row items-center justify-between">
            <div
              className="flex flex-row items-center gap-1 cursor-pointer"
              onClick={() => {
                setShowReplies((prev) => !prev);
              }}
            >
              <span className="text-sm font-normal text-gray-400">
                2 replies
              </span>
              {showReplies ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row items-center gap-1">
                <span className="text-sm font-normal text-gray-400">20</span>
                <Heart className="h-4 w-4 text-primary cursor-pointer" />
              </div>

              {isDesktop ? (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    {/* <BuyCourseButton /> */}
                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                      <Reply className="h-4 w-4 text-primary" />
                      <span className="text-sm font-normal text-gray-400">
                        Reply
                      </span>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px] py-4 bg-white">
                    <DialogHeader>
                      <DialogTitle>Send a Reply</DialogTitle>
                      {/* <DialogDescription>
                        Select a payment method
                      </DialogDescription> */}
                    </DialogHeader>
                    <div className="h-auto">
                      {/* <SelectPaymentOption courseId={courseId} /> */}
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        className="w-full"
                      />
                      <button className="w-full bg-primary text-white py-2 rounded-md mt-4 font-medium">
                        Send
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    {/* <BuyCourseButton /> */}
                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                      <Reply className="h-4 w-4 text-primary" />
                      <span className="text-sm font-normal text-gray-400">
                        Reply
                      </span>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="pb-7 bg-white">
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Send a Reply</DrawerTitle>
                      {/* <DrawerDescription>
                        select a payment method
                      </DrawerDescription> */}
                    </DrawerHeader>
                    <div className="px-4 pb-3 flex flex-col gap-2">
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        className="w-full"
                      />

                      <button className="w-full bg-primary text-white py-2 rounded-md mt-4 font-medium">
                        Send
                      </button>
                      {/* <SelectPaymentOption courseId={courseId} /> */}
                    </div>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>

          {showReplies && (
            <div className="mt-5 w-full flex flex-col items-start">
              {/*Replies*/}
              <div className="w-full">
                <div className="border border-[#EFEFEF] p-4 w-full flex flex-row gap-2 mx-auto">
                  {/*Topic Image*/}
                  <Avatar className="">
                    {/* <AvatarImage src="https://github.com/shadcn.png" alt="user pic" /> */}
                    <AvatarFallback className="!text-primary">
                      PT
                    </AvatarFallback>
                  </Avatar>

                  {/*Topic Content*/}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">First Reply</h2>
                    <p className="text-sm font-normal">
                      This is the first reply to the topic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
