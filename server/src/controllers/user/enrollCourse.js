const sendResponse = require("../../utils/sendResponse");

const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.params;

    console.log(req.params);

    return sendResponse.success(
      res,
      "success reaching controller",
      {
        data: "Data",
      },
      201
    );
  } catch (error) {}
};

module.exports = enrollCourse;
