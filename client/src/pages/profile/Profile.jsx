import React, { useContext } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import WhiteTypography from "../../components/WhiteTypography";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <MainLayoutWrapper>
        {auth &&
          Object.entries(auth).map(([key, value], index) => (
            <WhiteTypography key={index}>
              {key} : {value}
            </WhiteTypography>
          ))}
      </MainLayoutWrapper>
    </>
  );
};

export default Profile;
