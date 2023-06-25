import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Line, Text } from "components";

const FrameTwoPage: React.FC = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-600 flex flex-col font-plusjakartasans items-center justify-start mx-auto p-[58px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[39px] justify-start max-w-[1687px] mb-[114px] mx-auto w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mr-[410px] w-[76%] md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[0.24px]"
              size="txtPlusJakartaSansBold48"
            >
              YADOYA
            </Text>
            <Text
              className="leading-[56.00px] sm:mt-0 mt-[27px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 tracking-[0.24px]"
              size="txtPlusJakartaSansMedium48"
            >
              <span className="text-blue_gray-900 font-plusjakartasans text-left font-normal">
                <>
                  Welcome to
                  <br />
                </>
              </span>
              <span className="text-blue-500 font-plusjakartasans text-left font-bold">
                Yadoya
              </span>
            </Text>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[1006px] w-[41%] md:w-full">
            <Button
              className="common-pointer bg-white-A700 cursor-pointer flex items-center justify-center min-w-[681px] md:min-w-full px-[35px] py-[23px] rounded-lg shadow-bs"
              onClick={() => googleSignIn()}
              leftIcon={
                <Img
                  className="h-8 mr-[19px]"
                  src="images/img_search_1.svg"
                  alt="search 1"
                />
              }
            >
              <div className="sm:px-5 text-base text-blue_gray-900 text-left">
                Login with Google
              </div>
            </Button>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-7 p-[21px] sm:px-5 rounded-lg shadow-bs w-full">
              <div className="flex flex-row gap-[22px] items-end justify-center mt-1 w-[32%] md:w-full">
                <Img
                  className="h-8"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Text
                  className="mt-1.5 text-base text-blue_gray-900"
                  size="txtPoppinsRegular16"
                >
                  Login with Facebook
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-[34px] w-[99%] md:w-full">
              <Line className="bg-gray-400 h-px md:mt-0 my-[11px] w-[44%]" />
              <Text
                className="text-base text-blue_gray-900"
                size="txtPoppinsRegular16"
              >
                OR
              </Text>
              <Line className="bg-gray-400 h-px md:mt-0 my-[11px] w-[43%]" />
            </div>
            <div className="bg-gray-200 flex flex-col items-start justify-start mt-[34px] p-[13px] rounded-lg w-[99%] md:w-full">
              <div className="flex flex-row gap-[29px] items-center justify-start md:ml-[0] ml-[9px] w-[38%] md:w-full">
                <Img className="h-6" src="images/img_mail.svg" alt="mail" />
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Email
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPoppinsBold16"
                  >
                    example@gmail.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 flex flex-col items-center justify-start mt-5 p-[13px] rounded-lg w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-[97%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-blue_gray-900 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Password
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-[7px] text-base text-blue_gray-900"
                      size="txtPoppinsBold16"
                    >
                      ***********
                    </Text>
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_bieyefill.svg"
                      alt="bieyefill"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[23px] w-[98%] md:w-full">
              <CheckBox
                className="mb-0.5 text-base text-blue_gray-900 text-left"
                inputClassName="bg-gray-200 border border-blue_gray-100 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                name="rememberme"
                id="rememberme"
                label="Remember me"
              ></CheckBox>
              <a href="javascript:" className="mt-0.5 text-base text-blue-500">
                <Text size="txtPoppinsRegular16Blue500">Forgot Password?</Text>
              </a>
            </div>
            <Button
              className="common-pointer bg-blue-500 cursor-pointer font-semibold min-w-[671px] md:min-w-full mt-5 py-[26px] rounded-lg text-base text-center text-white-A700"
              onClick={() => navigate("/home1")}
            >
              Login
            </Button>
            <Text
              className="mt-12 text-base text-black-900"
              size="txtPoppinsRegular16Black900"
            >
              <span className="text-black-900 font-poppins text-left font-normal">
                Don’t have an account?{" "}
              </span>
              <span className="text-blue-500 font-poppins text-left font-normal">
                Register
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
