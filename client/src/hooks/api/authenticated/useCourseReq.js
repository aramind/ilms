import constants from "../../../configs/constants";
import useRequest from "../useRequest";

const url = constants?.API_URL?.COURSE;

const useCourseReq = ({ isPublic, showAck }) => {
  const request = useRequest({ isPublic, showAck });

  const req = {
    addCourse: async ({ data }) =>
      request({
        url,
        method: "POST",
        data,
      }),
    getCourse: async ({ params }) =>
      request({
        url: `${url}${params}`,
        method: "GET",
      }),
  };

  return req;
};

export default useCourseReq;
