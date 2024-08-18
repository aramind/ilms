import constants from "../../../configs/constants";
import useRequest from "../useRequest";

const BASE_URL = constants?.API_URL?.COURSE;

const useCourseReq = ({ isPublic, showAck }) => {
  const request = useRequest({ isPublic, showAck });

  const req = {
    addCourse: async ({ data }) => {
      return request({
        url: BASE_URL,
        method: "POST",
        data,
      });
    },
  };

  return req;
};

export default useCourseReq;
