import { db } from "./db";

export const getEnrolledCourses = () => {
  const user1 = db?.users?.[0];
  const enrolledCoursesId = user1?.enrolledCourses?.map((ec) => ec.courseId);
  const enrolledCoursesDetails = db?.courses?.filter((c) =>
    enrolledCoursesId?.includes(c.id)
  );
  return enrolledCoursesDetails;
};

export const getProgress = (courseId, userId) => {
  const user = db.users?.find((user) => user?.id === userId);
  const allTopics = db.topics?.filter((topic) => topic?.courseId === courseId);

  const totalTasks = allTopics?.reduce((total, topic) => {
    const tasksCount = topic.topicTasks.reduce(
      (sum, taskObject) => sum + Object.keys(taskObject).length,
      0
    );
    return total + tasksCount;
  }, 0);

  const courseProgress =
    user?.enrolledCourses?.find((ec) => ec.courseId === courseId)?.progress ||
    [];

  const totalCompletedTasks = courseProgress.reduce((total, topic) => {
    return total + topic.completedTasks.length;
  }, 0);

  const progress = Math.floor(
    Math.floor((totalCompletedTasks / totalTasks) * 100)
  );

  console.log("START");
  console.log(courseId);
  console.log(totalTasks);
  console.log(courseProgress);
  console.log(totalCompletedTasks);
  console.log(progress);
  console.log("END");
  return progress;
};
