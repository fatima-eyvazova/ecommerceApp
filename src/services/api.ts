import { axiosInstance } from "../utils/axiosInstance";

type ApiMethod = "post" | "get" | "patch" | "delete" | "put";
type ResultType = {
  status: number;
  data: null | {
    data: {
      success: boolean;
      message: string;
    };
  };
  response?: { data: unknown };
};

export const makeRequest = async (
  url: string,
  method: ApiMethod,
  body: unknown = null
) => {
  let result = {} as ResultType;
  try {
    result = await axiosInstance[method](url, body as never);
  } catch (error) {
    result = error as never;
  }

  const isSuccessStatus = result.status >= 200 && result.status < 300;
  if (isSuccessStatus && result.data) {
    return {
      data: result.data,
    };
  }

  if (result?.response) {
    return { data: result.response.data };
  }

  return result;
};
