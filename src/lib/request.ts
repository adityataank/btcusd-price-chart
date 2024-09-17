import { toast } from "sonner";

// handle get requests
const getRequestHandler = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    toast.error("Unable to fetch data at the moment. Please try again later.");
    console.error("ERROR IN GET REQUEST", err);
  }
};

export const REQUEST = {
  get: getRequestHandler,
};
