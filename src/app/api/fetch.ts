import fetch from "node-fetch";

export default async function handler(req: any, res: any) {
  try {
    // Make the API request from the server side
    const response = await fetch(
      "https://www.babypips.com/forexpedia/b.json"
      // , {
      //   headers: {
      //     // Add authorization header if needed
      //     Authorization: "Bearer YOUR_API_KEY",
      //     // Add other headers as necessary
      //   },
      // }
    );

    // Check if the response is not successful
    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch data from the API",
        status: response.status,
      });
    }

    // Parse the JSON data
    const data = await response.json();

    // Return the data as JSON
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
