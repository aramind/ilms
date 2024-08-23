import React from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import WhiteTypography from "../../components/WhiteTypography";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      {/* <MainLayoutWrapper>
        {auth &&
          Object.entries(auth).map(([key, value], index) => (
            <WhiteTypography key={index}>
              {key} : {value}
            </WhiteTypography>
          ))}
      </MainLayoutWrapper> */}
    </>
  );
};

export default Profile;
