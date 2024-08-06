import constants from "../../../configs/constants";
import useRequest from "../useRequest";

const ROOT_URL = constants?.API_URL?.ROOT;

const useRootReq = ({ isPublic, showAck }) => {
  const request = useRequest({ isPublic, showAck });

  const req = {
    signin: async ({ data }) => {
      return request({
        url: `${ROOT_URL}/signin`,
        method: "POST",
        data,
      });
    },
  };

  return req;
};

export default useRootReq;
