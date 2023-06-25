import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <header className="flex md:flex-col flex-row md:gap-10 gap-[107px] items-center justify-center md:px-5 px-[90px] py-[30px] w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[0.20px] w-auto"
                size="txtPlusJakartaSansExtraBold40"
              >
                YADOYA
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-blue-500 text-center sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular22"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular22Black900"
              >
                Your NFT’s
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular22Black900"
              >
                Categories
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular22Black900"
              >
                Tickets
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular22Black900"
              >
                Favorites
              </Text>
            </div>
            <Img
              className="h-[26px] w-5"
              src="images/img_translate.svg"
              alt="translate"
            />
            <Img
              className="h-[30px] w-[30px]"
              src="images/img_favorite.svg"
              alt="favorite"
            />
            <Img
              className="h-[30px] w-[25px]"
              src="images/img_notification.svg"
              alt="notification"
            />
            <div className="flex flex-col items-start justify-start w-[45px]">
              <Img
                className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                src="images/img_ellipse792.png"
                alt="ellipse792"
              />
            </div>
          </header>
          <div className="flex flex-col max-w-[1729px] mt-3 mx-auto md:px-5 relative w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col gap-5 h-[350px] md:h-auto items-center justify-center mx-auto md:px-10 sm:px-5 px-[636px] py-[75px] rounded-[30px] w-auto"
              style={{ backgroundImage: "url('images/img_hero.png')" }}
            >
              <Text
                className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[4.00px]"
                size="txtPlusJakartaSansBold40"
              >
                <span className="text-white-A700 font-plusjakartasans font-normal">
                  <>
                    Book your stay with <br />
                  </>
                </span>
                <span className="text-white-A700 font-plusjakartasans font-bold">
                  Yadoya
                </span>
              </Text>
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtPlusJakartaSansRomanRegular20"
              >
                Around 150,866,34 rooms are ready to serve you
              </Text>
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 gap-[271px] h-20 md:h-auto items-center justify-center max-w-[1055px] mt-[-40px] mx-auto px-3 py-[5px] rounded-[40px] shadow-bs1 w-full z-[1]">
              <Button className="bg-blue-500 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
                <Img
                  className="h-[30px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </Button>
              <div className="flex flex-col items-center justify-start p-2.5 w-auto">
                <Text
                  className="text-center text-gray-600_01 text-xl w-auto"
                  size="txtPlusJakartaSansRomanRegular20Gray60001"
                >
                  Search hotels / rooms / locations
                </Text>
              </div>
              <Button className="bg-blue-500 cursor-pointer font-bold min-w-[100px] py-3 rounded-[25px] text-center text-white-A700 text-xl">
                GO
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1720px] mt-11 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[23%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtPlusJakartaSansRomanBold32"
              >
                Recently Searched
              </Text>
              <div
                className="bg-cover bg-gray-300 bg-no-repeat flex flex-col h-[400px] md:h-auto items-start justify-end p-2.5 rounded-[20px] w-[389px] sm:w-full"
                style={{ backgroundImage: "url('images/img_frame162805.png')" }}
              >
                <Button className="bg-black-900_7f cursor-pointer min-w-[100px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                  London
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[49px] md:mt-0 mt-[51px] w-[401px] md:w-full">
              <div
                className="bg-cover bg-gray-300 bg-no-repeat flex flex-col h-[185px] md:h-auto items-start justify-end p-2.5 rounded-[20px] w-[401px] sm:w-full"
                style={{ backgroundImage: "url('images/img_frame162807.png')" }}
              >
                <Button className="bg-black-900_7f cursor-pointer min-w-[129px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                  Amsterdam
                </Button>
              </div>
              <div
                className="bg-cover bg-gray-300 bg-no-repeat flex flex-col h-[185px] md:h-auto items-start justify-end p-2.5 rounded-[20px] w-[401px] sm:w-full"
                style={{ backgroundImage: "url('images/img_frame162808.png')" }}
              >
                <Button className="bg-black-900_7f cursor-pointer min-w-[99px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                  Prague
                </Button>
              </div>
            </div>
            <div
              className="bg-cover bg-gray-300 bg-no-repeat flex md:flex-1 flex-col h-[400px] items-start justify-end md:ml-[0] ml-[37px] md:mt-0 mt-[51px] p-2.5 rounded-[20px] w-[24%] md:w-full"
              style={{ backgroundImage: "url('images/img_frame162806.png')" }}
            >
              <Button className="bg-black-900_7f cursor-pointer min-w-[119px] mt-[340px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                NewYork
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-[51px] w-[24%] md:w-full">
              <div
                className="bg-cover bg-gray-300 bg-no-repeat flex flex-col h-[185px] items-start justify-end p-2.5 rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame162809.png')" }}
              >
                <Button className="bg-black-900_7f cursor-pointer min-w-[79px] mt-[125px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                  Paris
                </Button>
              </div>
              <div
                className="bg-cover bg-gray-300 bg-no-repeat flex flex-col h-[185px] items-start justify-end p-2.5 rounded-[20px] w-full"
                style={{ backgroundImage: "url('images/img_frame162810.png')" }}
              >
                <Button className="bg-black-900_7f cursor-pointer min-w-[100px] mt-[125px] py-[7px] rounded-[20px] text-center text-white-A700 text-xl">
                  Sydney
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="mt-[100px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtPlusJakartaSansRomanBold32"
          >
            Available for purchase
          </Text>
          <List
            className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center max-w-[1772px] mt-2.5 mx-auto pl-[19px] md:px-5 py-[19px] w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start p-[5px] rounded-[15px] w-full"
                  style={{ backgroundImage: "url('images/img_hotel2.png')" }}
                >
                  <Button className="bg-white-A700 flex h-[30px] items-center justify-center mb-[119px] p-1 rounded-[10px] w-[30px]">
                    <Img src="images/img_location.svg" alt="location" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      Hotel Cliffton
                    </Text>
                    <Text
                      className="ml-[51px] mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.5
                    </Text>
                    <Img
                      className="h-[22px] ml-1 mt-1 w-[23px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    Harvard Street
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $150/ Night
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start p-[5px] rounded-[15px] w-full"
                  style={{
                    backgroundImage: "url('images/img_hotel2_160x245.png')",
                  }}
                >
                  <Button className="bg-white-A700 flex h-[30px] items-center justify-center mb-[119px] p-1 rounded-[10px] w-[30px]">
                    <Img src="images/img_location.svg" alt="location" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      St. Blavana
                    </Text>
                    <Text
                      className="ml-[75px] mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.3
                    </Text>
                    <Img
                      className="h-[22px] ml-1 mt-1 w-[23px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    Times Square
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $150/ Night
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start p-[5px] rounded-[15px] w-full"
                  style={{ backgroundImage: "url('images/img_hotel2_1.png')" }}
                >
                  <Button className="bg-white-A700 flex h-[30px] items-center justify-center mb-[119px] p-1 rounded-[10px] w-[30px]">
                    <Img src="images/img_location.svg" alt="location" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      Hotel Havana
                    </Text>
                    <Text
                      className="ml-[54px] mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.1
                    </Text>
                    <Img
                      className="h-[22px] ml-1.5 mt-1 w-[23px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    BakeVille
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $130/ Night
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start p-[5px] rounded-[15px] w-full"
                  style={{ backgroundImage: "url('images/img_hotel2_2.png')" }}
                >
                  <Button className="bg-white-A700 flex h-[30px] items-center justify-center mb-[119px] p-1 rounded-[10px] w-[30px]">
                    <Img src="images/img_location.svg" alt="location" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      Manchester{" "}
                    </Text>
                    <Text
                      className="ml-[67px] mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.5
                    </Text>
                    <Img
                      className="h-[22px] ml-1 mt-1 w-[23px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    Main Street
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $200/ Night
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start p-[5px] rounded-[15px] w-full"
                  style={{ backgroundImage: "url('images/img_hotel2_3.png')" }}
                >
                  <Button className="bg-white-A700 flex h-[30px] items-center justify-center mb-[119px] p-1 rounded-[10px] w-[30px]">
                    <Img src="images/img_location.svg" alt="location" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      Hotel Meritime
                    </Text>
                    <Text
                      className="ml-10 mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.7
                    </Text>
                    <Img
                      className="h-[22px] ml-[5px] mt-1 w-[23px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    Flamington
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $250/ Night
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-1 py-1 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start mb-1 w-full">
                <div
                  className="bg-cover bg-gray-400_01 bg-no-repeat flex flex-col h-40 items-end justify-start pl-1.5 py-1.5 rounded-[15px] w-full"
                  style={{
                    backgroundImage: "url('images/img_hotel2_160x221.png')",
                  }}
                >
                  <div className="bg-white-A700 flex flex-col items-end justify-start mb-[118px] pl-[5px] py-[5px] rounded-[5px] w-[6%] md:w-full">
                    <Img
                      className="h-[19px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[5px] w-[98%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtPlusJakartaSansRomanRegular20Black900"
                    >
                      Havana Vibes
                    </Text>
                    <Text
                      className="ml-[51px] mt-[5px] text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      4.6
                    </Text>
                    <Img
                      className="h-[22px] ml-1 mt-1"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-[15px] text-center text-gray-600_01"
                    size="txtPlusJakartaSansRomanRegular15"
                  >
                    University Road
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold15"
                    >
                      From $270/ Night
                    </Text>
                    <Img
                      className="h-[21px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Text
            className="mt-[100px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtPlusJakartaSansRomanBold32"
          >
            Hotels you can book now
          </Text>
          <List
            className="flex flex-col gap-[30px] items-center max-w-[1720px] mt-[30px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                <Img
                  className="h-[381px] sm:h-auto object-cover rounded-[20px] w-[38%] md:w-full"
                  src="images/img_frame162812.png"
                  alt="frame162812"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[63%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[14%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_frame162814.png"
                        alt="frame162814"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-[10px] w-full"
                        src="images/img_frame162815.png"
                        alt="frame162815"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_frame162816.png"
                        alt="frame162816"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                          size="txtPlusJakartaSansRomanSemiBold40"
                        >
                          The Ritz Carlton
                        </Text>
                        <Img
                          className="h-[35px] ml-56 sm:ml-[0]"
                          src="images/img_location_blue_gray_400.svg"
                          alt="location"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Umeda, Kita Ward
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[17px] w-[34%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="ml-3.5 text-blue_gray-800 text-center text-xl"
                          size="txtPlusJakartaSansRomanRegular20Bluegray800"
                        >
                          (1,4336)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[31px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-row items-center justify-between w-[55%] md:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[30%]">
                                <Img
                                  className="h-5"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Free Wifi
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[26px] items-center justify-start w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_question.svg"
                                  alt="question"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Parking
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-5 items-start justify-start w-[26%] md:w-full">
                              <Img
                                className="h-[35px] mt-0.5 w-[35px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Air Conditioning
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 w-[87%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-[64%] sm:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[36%]">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Indoor Pool
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[22px] items-start justify-start mt-[3px] w-[30%]">
                                <Img
                                  className="h-[30px] mb-1 w-[30px]"
                                  src="images/img_car_blue_gray_800.svg"
                                  alt="car_One"
                                />
                                <Text
                                  className="mt-1 text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between sm:mt-0 mt-[5px] w-[14%] sm:w-full">
                              <Img
                                className="h-5"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Gym
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-[95%] md:w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[12%] sm:w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_cut.svg"
                                alt="cut"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Spa
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[59%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[3px] w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Laundry
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-[36%]">
                                <Img
                                  className="h-[30px] mb-[3px] w-[30px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="mt-[3px] text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Pet Friendly
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[90px] sm:h-auto object-cover rounded-[10px] w-[14%] md:w-full"
                      src="images/img_frame162817.png"
                      alt="frame162817"
                    />
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold32"
                    >
                      $200/Night
                    </Text>
                    <Button className="bg-blue-500 flex h-[45px] items-center justify-center mb-3 md:ml-[0] ml-[379px] md:mt-0 mt-[33px] p-1.5 rounded-[15px] shadow-bs2 w-[45px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        alt="location_One"
                      />
                    </Button>
                    <Button className="bg-blue-500 cursor-pointer mb-2.5 min-w-[200px] md:ml-[0] ml-[22px] md:mt-0 mt-[30px] py-2.5 rounded-[25px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                <Img
                  className="h-[381px] sm:h-auto object-cover rounded-[20px] w-[38%] md:w-full"
                  src="images/img_frame162812_381x617.png"
                  alt="frame162812"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[63%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[14%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_frame162814_90x141.png"
                        alt="frame162814"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-[10px] w-full"
                        src="images/img_frame162815_90x141.png"
                        alt="frame162815"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_frame162816_90x141.png"
                        alt="frame162816"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                          size="txtPlusJakartaSansRomanSemiBold40"
                        >
                          Aman Tokyo
                        </Text>
                        <Img
                          className="h-[35px] ml-72 sm:ml-[0]"
                          src="images/img_location_blue_gray_400.svg"
                          alt="location"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Umeda, Kita Ward
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[17px] w-[34%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="ml-3.5 text-blue_gray-800 text-center text-xl"
                          size="txtPlusJakartaSansRomanRegular20Bluegray800"
                        >
                          (1,4336)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[31px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-row items-center justify-between w-[55%] md:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[30%]">
                                <Img
                                  className="h-5"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Free Wifi
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[26px] items-center justify-start w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_question.svg"
                                  alt="question"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Parking
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-5 items-start justify-start w-[26%] md:w-full">
                              <Img
                                className="h-[35px] mt-0.5 w-[35px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Air Conditioning
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 w-[87%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-[64%] sm:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[36%]">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Indoor Pool
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[22px] items-start justify-start mt-[3px] w-[30%]">
                                <Img
                                  className="h-[30px] mb-1 w-[30px]"
                                  src="images/img_car_blue_gray_800.svg"
                                  alt="car_One"
                                />
                                <Text
                                  className="mt-1 text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between sm:mt-0 mt-[5px] w-[14%] sm:w-full">
                              <Img
                                className="h-5"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Gym
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-[95%] md:w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[12%] sm:w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_cut.svg"
                                alt="cut"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Spa
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[59%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[3px] w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Laundry
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-[36%]">
                                <Img
                                  className="h-[30px] mb-[3px] w-[30px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="mt-[3px] text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Pet Friendly
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[90px] sm:h-auto object-cover rounded-[10px] w-[14%] md:w-full"
                      src="images/img_frame162817_90x141.png"
                      alt="frame162817"
                    />
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold32"
                    >
                      $200/Night
                    </Text>
                    <Button className="bg-blue-500 flex h-[45px] items-center justify-center mb-3 md:ml-[0] ml-[379px] md:mt-0 mt-[33px] p-1.5 rounded-[15px] shadow-bs2 w-[45px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        alt="location_One"
                      />
                    </Button>
                    <Button className="bg-blue-500 cursor-pointer mb-2.5 min-w-[200px] md:ml-[0] ml-[22px] md:mt-0 mt-[30px] py-2.5 rounded-[25px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                <Img
                  className="h-[381px] sm:h-auto object-cover rounded-[20px] w-[38%] md:w-full"
                  src="images/img_frame162812.png"
                  alt="frame162812"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[63%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[14%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_frame162814_1.png"
                        alt="frame162814"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-[10px] w-full"
                        src="images/img_frame162815_1.png"
                        alt="frame162815"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_frame162816_1.png"
                        alt="frame162816"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                          size="txtPlusJakartaSansRomanSemiBold40"
                        >
                          Fujiya Hotel
                        </Text>
                        <Img
                          className="h-[35px] sm:ml-[0] ml-[298px]"
                          src="images/img_location_blue_gray_400.svg"
                          alt="location"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Umeda, Kita Ward
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[17px] w-[34%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="ml-3.5 text-blue_gray-800 text-center text-xl"
                          size="txtPlusJakartaSansRomanRegular20Bluegray800"
                        >
                          (1,4336)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[31px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-row items-center justify-between w-[55%] md:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[30%]">
                                <Img
                                  className="h-5"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Free Wifi
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[26px] items-center justify-start w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_question.svg"
                                  alt="question"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Parking
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-5 items-start justify-start w-[26%] md:w-full">
                              <Img
                                className="h-[35px] mt-0.5 w-[35px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Air Conditioning
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 w-[87%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-[64%] sm:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[36%]">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Indoor Pool
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[22px] items-start justify-start mt-[3px] w-[30%]">
                                <Img
                                  className="h-[30px] mb-1 w-[30px]"
                                  src="images/img_car_blue_gray_800.svg"
                                  alt="car_One"
                                />
                                <Text
                                  className="mt-1 text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between sm:mt-0 mt-[5px] w-[14%] sm:w-full">
                              <Img
                                className="h-5"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Gym
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-[95%] md:w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[12%] sm:w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_cut.svg"
                                alt="cut"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Spa
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[59%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[3px] w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Laundry
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-[36%]">
                                <Img
                                  className="h-[30px] mb-[3px] w-[30px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="mt-[3px] text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Pet Friendly
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[90px] sm:h-auto object-cover rounded-[10px] w-[14%] md:w-full"
                      src="images/img_frame162817.png"
                      alt="frame162817"
                    />
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold32"
                    >
                      $200/Night
                    </Text>
                    <Button className="bg-blue-500 flex h-[45px] items-center justify-center mb-3 md:ml-[0] ml-[379px] md:mt-0 mt-[33px] p-1.5 rounded-[15px] shadow-bs2 w-[45px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        alt="location_One"
                      />
                    </Button>
                    <Button className="bg-blue-500 cursor-pointer mb-2.5 min-w-[200px] md:ml-[0] ml-[22px] md:mt-0 mt-[30px] py-2.5 rounded-[25px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                <Img
                  className="h-[381px] sm:h-auto object-cover rounded-[20px] w-[38%] md:w-full"
                  src="images/img_frame162812_1.png"
                  alt="frame162812"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[63%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[14%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_frame162814_2.png"
                        alt="frame162814"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-[10px] w-full"
                        src="images/img_frame162815.png"
                        alt="frame162815"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_frame162816_2.png"
                        alt="frame162816"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                          size="txtPlusJakartaSansRomanSemiBold40"
                        >
                          Hilton Tokyo
                        </Text>
                        <Img
                          className="h-[35px] sm:ml-[0] ml-[284px]"
                          src="images/img_location_blue_gray_400.svg"
                          alt="location"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Umeda, Kita Ward
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[17px] w-[34%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="ml-3.5 text-blue_gray-800 text-center text-xl"
                          size="txtPlusJakartaSansRomanRegular20Bluegray800"
                        >
                          (1,4336)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[31px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-row items-center justify-between w-[55%] md:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[30%]">
                                <Img
                                  className="h-5"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Free Wifi
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[26px] items-center justify-start w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_question.svg"
                                  alt="question"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Parking
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-5 items-start justify-start w-[26%] md:w-full">
                              <Img
                                className="h-[35px] mt-0.5 w-[35px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Air Conditioning
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 w-[87%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-[64%] sm:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[36%]">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Indoor Pool
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[22px] items-start justify-start mt-[3px] w-[30%]">
                                <Img
                                  className="h-[30px] mb-1 w-[30px]"
                                  src="images/img_car_blue_gray_800.svg"
                                  alt="car_One"
                                />
                                <Text
                                  className="mt-1 text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between sm:mt-0 mt-[5px] w-[14%] sm:w-full">
                              <Img
                                className="h-5"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Gym
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-[95%] md:w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[12%] sm:w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_cut.svg"
                                alt="cut"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Spa
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[59%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[3px] w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Laundry
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-[36%]">
                                <Img
                                  className="h-[30px] mb-[3px] w-[30px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="mt-[3px] text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Pet Friendly
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[90px] sm:h-auto object-cover rounded-[10px] w-[14%] md:w-full"
                      src="images/img_frame162817_1.png"
                      alt="frame162817"
                    />
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold32"
                    >
                      $200/Night
                    </Text>
                    <Button className="bg-blue-500 flex h-[45px] items-center justify-center mb-3 md:ml-[0] ml-[379px] md:mt-0 mt-[33px] p-1.5 rounded-[15px] shadow-bs2 w-[45px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        alt="location_One"
                      />
                    </Button>
                    <Button className="bg-blue-500 cursor-pointer mb-2.5 min-w-[200px] md:ml-[0] ml-[22px] md:mt-0 mt-[30px] py-2.5 rounded-[25px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[9px] rounded-[30px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                <Img
                  className="h-[381px] sm:h-auto object-cover rounded-[20px] w-[38%] md:w-full"
                  src="images/img_frame162812_2.png"
                  alt="frame162812"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[63%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-[5px] w-[14%] md:w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_frame162816_1.png"
                        alt="frame162814"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-[10px] w-full"
                        src="images/img_frame162815_2.png"
                        alt="frame162815"
                      />
                      <Img
                        className="h-[90px] md:h-auto mt-[5px] object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_frame162816_3.png"
                        alt="frame162816"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[82%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                          size="txtPlusJakartaSansRomanSemiBold40"
                        >
                          Haruya Naramachi
                        </Text>
                        <Img
                          className="h-[35px] sm:ml-[0] ml-[171px]"
                          src="images/img_location_blue_gray_400.svg"
                          alt="location"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Umeda, Kita Ward
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[17px] w-[34%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-[30px] ml-2.5 w-[30px]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="ml-3.5 text-blue_gray-800 text-center text-xl"
                          size="txtPlusJakartaSansRomanRegular20Bluegray800"
                        >
                          (1,4336)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[31px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-row items-center justify-between w-[55%] md:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[30%]">
                                <Img
                                  className="h-5"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Free Wifi
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[26px] items-center justify-start w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_question.svg"
                                  alt="question"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Parking
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-5 items-start justify-start w-[26%] md:w-full">
                              <Img
                                className="h-[35px] mt-0.5 w-[35px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Air Conditioning
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 w-[87%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-[64%] sm:w-full">
                              <div className="flex flex-row gap-5 items-center justify-start w-[36%]">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Indoor Pool
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[22px] items-start justify-start mt-[3px] w-[30%]">
                                <Img
                                  className="h-[30px] mb-1 w-[30px]"
                                  src="images/img_car_blue_gray_800.svg"
                                  alt="car_One"
                                />
                                <Text
                                  className="mt-1 text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-between sm:mt-0 mt-[5px] w-[14%] sm:w-full">
                              <Img
                                className="h-5"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Gym
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-[95%] md:w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[12%] sm:w-full">
                              <Img
                                className="h-[25px]"
                                src="images/img_cut.svg"
                                alt="cut"
                              />
                              <Text
                                className="text-blue_gray-800 text-center text-xl"
                                size="txtPlusJakartaSansRomanRegular20Bluegray800"
                              >
                                Spa
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-[59%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[3px] w-[29%]">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Laundry
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-start justify-start w-[36%]">
                                <Img
                                  className="h-[30px] mb-[3px] w-[30px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="mt-[3px] text-blue_gray-800 text-center text-xl"
                                  size="txtPlusJakartaSansRomanRegular20Bluegray800"
                                >
                                  Pet Friendly
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[90px] sm:h-auto object-cover rounded-[10px] w-[14%] md:w-full"
                      src="images/img_frame162817_2.png"
                      alt="frame162817"
                    />
                    <Text
                      className="md:ml-[0] ml-[52px] md:mt-0 mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                      size="txtPlusJakartaSansRomanBold32"
                    >
                      $200/Night
                    </Text>
                    <Button className="bg-blue-500 flex h-[45px] items-center justify-center mb-3 md:ml-[0] ml-[379px] md:mt-0 mt-[33px] p-1.5 rounded-[15px] shadow-bs2 w-[45px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        alt="location_One"
                      />
                    </Button>
                    <Button className="bg-blue-500 cursor-pointer mb-2.5 min-w-[200px] md:ml-[0] ml-[22px] md:mt-0 mt-[30px] py-2.5 rounded-[25px] shadow-bs2 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-gray-400_01 flex flex-col items-center justify-start mt-[26px] p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1835px] mb-[13px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-4 items-end justify-start mb-[13px] w-[56%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[0.15px]"
                      size="txtPlusJakartaSansExtraBold30"
                    >
                      YADOYA
                    </Text>
                    <Text
                      className="leading-[50.00px] ml-0.5 md:ml-[0] text-white-A700 text-xl tracking-[0.10px] w-full"
                      size="txtPlusJakartaSansRomanRegular20"
                    >
                      Discover a world of comfort and convenience with our hotel
                      booking website, where dreams become reservations and
                      wanderlust turns into unforgettable experiences.
                    </Text>
                  </div>
                  <Line className="bg-white-A700 h-px w-full" />
                </div>
                <div className="flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-3.5 w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px] w-full"
                      size="txtPlusJakartaSansRomanRegular20"
                    >
                      Help
                    </Text>
                    <Text
                      className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px] w-full"
                      size="txtPlusJakartaSansRomanRegular20"
                    >
                      FAQ
                    </Text>
                  </div>
                  <Text
                    className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px] w-full"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    Customer Service
                  </Text>
                  <Text
                    className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px] w-[77%] sm:w-full"
                    size="txtPlusJakartaSansRomanRegular20"
                  >
                    How to Guide
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                <Text
                  className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px]"
                  size="txtPlusJakartaSansRomanRegular20"
                >
                  2023 ©️ All rights Reserved{" "}
                </Text>
                <a
                  href="javascript:"
                  className="leading-[50.00px] text-white-A700 text-xl tracking-[0.10px]"
                >
                  <Text size="txtPlusJakartaSansRomanRegular20">
                    Contact Us
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
