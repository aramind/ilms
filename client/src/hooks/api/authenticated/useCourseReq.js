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
    updateCourse: async ({ courseId, data }) =>
      request({
        url: `${url}/${courseId}`,
        method: "PATCH",
        data,
      }),
    getStudents: async ({ courseId, params }) =>
      request({
        url: `${url}/${courseId}/students${params}`,
        method: "GET",
      }),
  };

  return req;
};

export default useCourseReq;
