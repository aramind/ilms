const constants = require("../../config/constants");
const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const updateCourseProgress = async (req, res) => {
  console.log("in update course controller");

  try {
    const { courseId, topicId, taskId } = req.body;

    const userId = req?.credentials?._id;

    // Validate input
    if (!courseId || !topicId || !taskId) {
      return sendResponse.failed(res, "Incomplete information", null, 400);
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return sendResponse.failed(res, "Unknown user", null, 404);
    }

    // check if the course already exists in the enrolledCourses
    const courseIndex = user.enrolledCourses?.findIndex((ec) =>
      ec.equals(courseId)
    );
    if (courseIndex === -1) {
      user?.enrolledCourses.push({
        _id: courseId,
        status: constants?.ENROLLED_COURSE_STATUSES?.[1],
        progress: [{ topic: topicId, completedTopicTasks: [taskId] }],
      });
    } else {
      const progressIndex = user?.enrolledCourses[
        courseIndex
      ].progress?.findIndex((p) => p.topic?.equals(topicId));

      if (progressIndex === -1) {
        user?.enrolledCourses[courseIndex].progress.push({
          topic: topicId,
          completedTopicTasks: [taskId],
        });
      } else {
        const taskIndex =
          user.enrolledCourses[courseIndex].progress[
            progressIndex
          ].completedTopicTasks?.indexOf(taskId);

        if (taskIndex === -1) {
          user?.enrolledCourses[courseIndex].progress[
            progressIndex
          ].completedTopicTasks.push(taskId);
        } else {
          user?.enrolledCourses[courseIndex].progress[
            progressIndex
          ].completedTopicTasks.splice(taskIndex, 1);
        }
      }
    }

    console.log("BEEEEEEEEEEEEEEEEEEEEE");

    console.log(user.enrolledCourses);
    await user.save();

    console.log("AFFFFFFFFFTER");
    console.log(user.enrolledCourses);

    return sendResponse.success(
      res,
      "Task updated successfully",
      user?.enrolledCourses,
      200
    );
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Error updating task", error, 500);
  }
};

module.exports = updateCourseProgress;
