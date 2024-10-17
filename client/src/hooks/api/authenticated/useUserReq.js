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
    getUsers: async ({ params }) =>
      request({
        url: `${url}${params}`,
        method: "GET",
      }),
    updateUser: async ({ _id, data }) =>
      request({
        url: `${url}/${_id}`,
        method: "PATCH",
        data,
      }),
    updateEnrolledCourse: async ({ userId, courseId, field, data }) =>
      request({
        url: `${url}/${userId}/enrolledCourses/${courseId}/update/${field}`,
        method: "PATCH",
        data,
      }),
  };

  return req;
};

export default useUserReq;
