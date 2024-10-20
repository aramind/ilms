export const computeCourseProgress = (course, student) => {
  const liveTopicTasks = course?.topics
    ?.filter((topic) => topic.status === "live")
    ?.flatMap((lt) => lt.topicTasks)
    ?.map((ltt) => ltt._id);

  const completedTasks = student?.enrolledCourses
    ?.filter((c) => c._id === course?._id)?.[0]
    ?.progress?.flatMap((c) => c.completedTopicTasks);

  const progress = Math.round(
    (completedTasks?.length / liveTopicTasks?.length) * 100
  );

  return progress;
};
