const constants = {
  sponsors: [
    { name: "PUP", logo: "pup.png" },
    { name: "ECESS", logo: "ecess.png" },
    { name: "IECEP", logo: "iecep.png" },
    { name: "Intellects", logo: "intellects.jpg" },
    { name: "PERCDC Learnhub", logo: "perc.png" },
    { name: "SM", logo: "sm.png" },
    { name: "Alexan", logo: "alexan.png" },
    { name: "Uplift", logo: "uplift.png" },
  ],
  signUpInImages: [
    "boy_studying_2.jpeg",
    "boy_studying_3.jpeg",
    "boy_studying_4.jpeg",
    "boy_studying_5.jpeg",
    "boy_studying_6.jpeg",
    "boy_studying_7.jpeg",
    "girl_studying_1.jpeg",
    "girl_studying_2.jpeg",
    "girl_studying_3.jpeg",
    "girl_studying_4.jpeg",
    "girl_studying_5.jpeg",
    "girl_studying_6.jpeg",
  ],

  API_URL: {
    ROOT: `${process.env.REACT_APP_API_URL}/v1`,
    COURSE: `${process.env.REACT_APP_API_URL}/v1/courses`,
    USER: `${process.env.REACT_APP_API_URL}/v1/users`,
  },
};

export default constants;
