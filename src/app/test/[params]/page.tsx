// "use client";

import React, { ChangeEvent, useEffect, useState } from "react";

async function fetchDiscuss(id: any) {
  const response: any = await fetch(
    `https://www.babypips.com/forexpedia/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
}

export default async function Test({ params }: { params: any }) {
  const data = await fetchDiscuss(params.params);
  console.log(data);
  //   console.log(params.params);

  return (
    <div>
      {/* <Input onChange={handleChange} /> */}

      <div></div>
    </div>
  );
}
