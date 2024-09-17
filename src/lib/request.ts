// handle get requests
const getRequestHandler = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("ERROR IN GET REQUEST", err);
  }
};

export const REQUEST = {
  get: getRequestHandler,
};
