export const HttpGetCallerWhole = async (endpoint: any, headers: any) => {
  try {
    const savedUserResponse = await fetch(`${endpoint}`, {
      method: "GET",
      headers: headers,
    });

    if (!savedUserResponse.ok) {
      const errorData = await savedUserResponse.text();
      throw new Error(errorData);
    }

    const responseData = await savedUserResponse.json();
    // const Res = JSON.parse(responseData);
    return responseData;
  } catch (err) {
    return err;
  }
};

export default HttpGetCallerWhole;
