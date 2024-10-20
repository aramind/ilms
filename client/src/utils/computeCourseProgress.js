export const computeCourseProgress = (course, student) => {
  const liveTopicTasks = course?.topics
    ?.filter((topic) => topic.status === "live")
    ?.flatMap((lt) => lt.topicTasks)
    ?.map((ltt) => ltt._id);

  if (liveTopicTasks?.length < 1) return "0";

  const completedTasks = student?.enrolledCourses
    ?.filter((c) => c._id === course?._id)?.[0]
    ?.progress?.flatMap((c) => c.completedTopicTasks);

  if (completedTasks?.length < 1) return "0";

  const computedProgress = Math.round(
    (completedTasks?.length / liveTopicTasks?.length) * 100
  );

  const progress = computedProgress || "0";
  return progress;
};
