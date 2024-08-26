const constants = require("../../config/constants");
const User = require("../../models/User");
const sendResponse = require("../../utils/sendResponse");

const updateCourseProgress = async (req, res) => {
  console.log("in update course controller");

  try {
    const { courseId, topicId, taskId } = req.body;

    const userId = req?.credentials?._id;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return sendResponse.failed(res, "Unknown user", null, 404);
    }

    // check if the course already exists in the enrolledCOurses

    const result = await User.updateOne(
      { _id: userId },
      {
        $set: {
          // add course if not present
          "enrolledCourses.$[enrolledCourse].progress.$[progress].completedTasks":
            {
              $cond: {
                if: {
                  $in: [taskId, "enrolledCourse.progress.completedTopicTasks"],
                },
                then: {
                  $pull: {
                    "enrolledCourses.$[enrolledCourse].progress.$[progress].completedTopicTasks":
                      taskId,
                  },
                },
                else: {
                  $addToSet: {
                    "enrolledCourses.$[enrolledCourse].progress.$[progress].completedTopicTasks":
                      taskId,
                  },
                },
              },
            },
        },
      },
      {
        arrayFilters: [
          { "enrolledCourse.course": courseId },
          { "progress.topic": topicId },
        ],
      }
    );

    if (result.matchedCount === 0) {
      return sendResponse.failed(res, "Record not found", null, 404);
    }

    return sendResponse.success(res, "Task updated successfully", result, 200);
  } catch (error) {
    console.error(error);
    return sendResponse.failed(res, "Error updating task", error, 500);
  }
};

module.exports = updateCourseProgress;
