import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import { Stack } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { useNavigate } from "react-router-dom";
import { mockCourses } from "../../configs/mockDB";

const Main = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <WhiteTypography variant="h5" mb={1}>
        Courses
      </WhiteTypography>
      <WhiteTypography mb={2}>
        Hi Robin! Good Luck with your studies!
      </WhiteTypography>

      <CardGroupWithTitle title="Enrolled Courses">
        <CardGroupWrapper>
          {mockCourses
            .filter((course) => course.isPurchased)
            .map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))}
          {/* <CourseCard
            title="Mathematics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
            courseId="1"
          />
          <CourseCard
            title="Electronics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
            courseId="1"
          />
          <CourseCard
            title="GEAS"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
            courseId="1"
          />
          <CourseCard
            title="Electronic Systems and Technologies"
            description=" Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination."
            progress="30"
            courseId="1" */}
          {/* /> */}
        </CardGroupWrapper>
      </CardGroupWithTitle>
      <CardGroupWithTitle title="Recommended Courses">
        <CardGroupWrapper>
          {/* <CourseCard
            title="Math Refresher"
            description=" Review course for Electronics in the ECE Licensure Examination."
            isPurchased={false}
            price="500"
          />
          <CourseCard
            title="Elex Refresher"
            description=" Review course for Electronics in the ECE Licensure Examination."
            isPurchased={false}
            price="500"
          /> */}
          {mockCourses
            .filter((course) => !course.isPurchased)
            .map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
