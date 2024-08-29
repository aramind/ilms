const sendResponse = require("../../utils/sendResponse");
const Course = require("../../models/Course");

const addCourse = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const existing = await Course.findOne({
      code: data?.code,
    });

    if (existing) {
      return sendResponse.failed(
        res,
        "Course cannot have duplicate!",
        null,
        409
      );
    }

    const savedTopics = data?.topics?.map((topicData) => {
      const savedTasks = topicData?.topicTasks;

      return {
        ...topicData,
        topicTasks: savedTasks,
      };
    });

    const course = new Course({
      code: data.code,
      acronym: data.acronym,
      title: data.title,
      category: data.category,
      description: data.description,
      topics: savedTopics,
      creator: "66afa5583b1ecc19978023ac",
    });

    const createdCourse = await course.save();

    return sendResponse.success(
      res,
      "Course added successfully",
      createdCourse,
      201
    );
  } catch (error) {
    console.log(error);
    sendResponse.failed(res, "Error adding course", error, 500);
  }
};

module.exports = addCourse;
