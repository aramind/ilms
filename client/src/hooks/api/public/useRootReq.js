import constants from "../../../configs/constants";
import useRequest from "../useRequest";

const url = constants?.API_URL?.ROOT;

const useRootReq = ({ isPublic, showAck }) => {
  const request = useRequest({ isPublic, showAck });

  const req = {
    signup: async ({ data }) => {
      return request({
        url: `${url}/signup`,
        method: "POST",
        data,
      });
    },
    signin: async ({ data }) => {
      return request({
        url: `${url}/signin`,
        method: "POST",
        data,
      });
    },
    refresh: async () => {
      return request({
        url: `${url}/refresh`,
        method: "GET",
      });
    },
  };

  return req;
};

export default useRootReq;
