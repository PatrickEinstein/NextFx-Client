export const HttpGetCallerWhole = async (endpoint: any, headers: any) => {
  try {
    const savedUserResponse = await fetch(`${endpoint}`, {
      method: "GET",
      headers: headers,
    });

    const responseData = await savedUserResponse.json();

    return responseData;
  } catch (err) {
    return err;
  }
};

export const HttpOTHERcaller = async (
  endpoint: any,
  headers: any,
  method: string,
  body: Object
) => {
  try {
    const savedUserResponse = await fetch(`${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });

    const responseData = await savedUserResponse.json();

    return responseData;
  } catch (err) {
    return err;
  }
};

export default HttpGetCallerWhole;
