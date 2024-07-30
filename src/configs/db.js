export const db = {
  course: [
    {
      id: 1,
      code: "ECE-MATH",
      title: "Mathematics",
      category: "Engineering",
      access: 1,
      description: "Mathematics review for ECE Board Exam",
      topics: [{ 1: "m1", 2: "m2", 3: "m3", 4: "m4" }],
    },
    {
      id: 2,
      code: "ECE-ELEX",
      title: "Electronics",
      category: "Engineering",
      access: 1,
      description: "Electronics review for ECE Board Exam",
      topics: [{ 1: "e1", 2: "e2", 3: "e3", 4: "e4" }],
    },
    {
      id: 3,
      code: "ECE-GEAS",
      title: "GEAS",
      category: "Engineering",
      access: 1,
      description: "GEAS review for ECE Board Exam",
      topics: [{ 1: "g1", 2: "g2", 3: "g3", 4: "g4" }],
    },
    {
      id: 4,
      code: "ECE-MATH",
      title: "Electronic Systems and Technologies",
      category: "Engineering",
      access: 1,
      description: "EST review for ECE Board Exam",
      topics: [{ 1: "s1", 2: "s2", 3: "s3", 4: "s4" }],
    },
    {
      id: 5,
      code: "ECE-FCS",
      title: "Feedback and Control Systems",
      category: "Engineering",
      access: 1,
      description: "Regular subject offering for ECE",
      topics: [{ 1: "f1", 2: "f2", 3: "f3", 4: "f4" }],
    },
  ],
  topic: [
    {
      id: "m1",
      code: "ECE-m1",
      title: "Introduction",
      description: "Introduction description",
      courseId: 1,
      topicTasks: [
        {
          1: "Read Chapter 1",
          2: "Read Chapter 2",
          3: "Watch Video 1",
          4: "Watch Video 2",
          5: "Answer Practice Exam 1",
        },
      ],
      files: ["Course Outline", "Homework"],
    },
    {
      id: "m2",
      code: "ECE-m2",
      title: "Calculus",
      description: "Calculus description",
      courseId: 1,
      topicTasks: [
        {
          1: "Read Chapter 1",
          2: "Read Chapter 2",
          3: "Watch Video 1",
          4: "Watch Video 2",
          5: "Answer Practice Exam 1",
        },
      ],
      files: ["Formula List", "Homework"],
    },
    {
      id: "m3",
      code: "ECE-m3",
      title: "Adv Math",
      description: "Introduction description",
      courseId: 1,
      topicTasks: [
        {
          1: "Read Chapter 1",
          2: "Read Chapter 2",
          3: "Watch Video 1",
          4: "Watch Video 2",
          5: "Answer Practice Exam 1",
        },
      ],
      files: ["Course Outline", "Homework"],
    },
    {
      id: "m4",
      code: "ECE-m4",
      title: "DE",
      description: "Introduction description",
      courseId: 1,
      topicTasks: [
        {
          1: "Read Chapter 1",
          2: "Read Chapter 2",
          3: "Watch Video 1",
          4: "Watch Video 2",
          5: "Answer Practice Exam 1",
        },
      ],
      files: ["Course Outline", "Homework"],
    },
    {
      id: "m5",
      code: "ECE-m5",
      title: "DE",
      description: "Introduction description",
      courseId: 1,
      topicTasks: [
        {
          1: "Read Chapter 1",
          2: "Read Chapter 2",
          3: "Watch Video 1",
          4: "Watch Video 2",
          5: "Answer Practice Exam 1",
        },
      ],
      files: ["Course Outline", "Homework"],
    },
  ],
  users: [
    {
      firstName: "Robin",
      lastName: "Miranda",
      password: "1234",
      email: "mon@gmail.com",
      role: "student",
      enrolledCourses: [
        {
          courseId: 1,
          progress: [
            {
              topicId: "m1",
              completedTasks: [1, 2, 3, 4, 5],
            },
            {
              topicId: "m3",
              completedTasks: [1, 2],
            },
            {
              topicId: "m3",
              completedTasks: [1, 2, 3],
            },
            {
              topicId: "m5",
              completedTasks: [1],
            },
          ],
        },
        {
          courseId: 2,
          progress: [
            {
              topicId: "e1",
              completedTasks: [1, 2, 3],
            },
            {
              topicId: "e2",
              completedTasks: [1, 2],
            },
            {
              topicId: "e3",
              completedTasks: [1, 2, 3],
            },
          ],
        },
        {
          courseId: 3,
          progress: [
            {
              topicId: "g1",
              completedTasks: [1, 2, 3, 4, 5],
            },
            {
              topicId: "g2",
              completedTasks: [1, 2],
            },
            {
              topicId: "g3",
              completedTasks: [1, 2, 3],
            },
          ],
        },
        {
          courseId: 5,
          progress: [
            {
              topicId: "f1",
              completedTasks: [1, 2, 3],
            },
          ],
        },
      ],
    },
  ],
};
