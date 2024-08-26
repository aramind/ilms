import constants from "../../../configs/constants";
import useRequest from "../useRequest";

const url = constants?.API_URL?.USER;

const useUserReq = ({ isPublic, showAck }) => {
  const request = useRequest({ isPublic, showAck });

  const req = {
    enrollCourse: async ({ userId, courseId, data }) =>
      request({
        url: `${url}/${userId}/enrolledCourses/${courseId}/enroll`,
        method: "PATCH",
        data,
      }),

    getEnrolledCourses: async () =>
      request({
        url: `${url}/enrolledCourses`,
        method: "GET",
      }),
    updateTopicTasks: async (data) =>
      request({
        url: `${url}/updateTopicTasks`,
        method: "PATCH",
        data,
      }),
  };

  return req;
};

export default useUserReq;
