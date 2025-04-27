import { Button, Image, FloatButton } from "antd";
import "./App.css";
import {
  ArrowRightOutlined,
  BulbOutlined,
  BulbFilled,
} from "@ant-design/icons";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const imageLink = isDarkMode
    ? "/dark-right-splash.png"
    : "/light-right-splash.png";

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="contentix p-4 lg:p-10 w-full h-full lg:h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <div className="w-full h-full flex flex-col lg:flex-row items-stretch lg:px-6 pt-10 pb-20 gap-32 lg:gap-6">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between">
          <div className="w-full flex items-center gap-1 mb-10 lg:mb-0">
            <span className="circle w-5 h-5 bg-[var(--primary-color)] rounded-full text-white"></span>
            <h1 className="font-bold">CONTENTIX</h1>
          </div>

          <div className="mb-10 lg:mb-0">
            <h1 className="w-full lg:w-[470px] text-6xl font-bold mb-6">
              Bring your <em className="font-light">vision</em> to{" "}
              <span className="font-light">life</span> in{" "}
              <span className="text-[var(--primary-color)]">seconds</span> with
              AI.
            </h1>

            <p className="lg: w-full lg:w-[450px] text-base mb-6">
              With our smart tools, you can generate stunning visuals and
              content in seconds. Designed for creators, marketers, and
              innovators who move fast and think big.
            </p>

            <Button
              icon={
                <div className="bg-white text-black flex items-center justify-center rounded-full w-5 h-5 p-3">
                  <ArrowRightOutlined />
                </div>
              }
              type="primary"
              style={{ borderRadius: "9999px", padding: "25px 20px" }}
              iconPosition="end"
            >
              Book appointment
            </Button>
          </div>

          <Image
            width={"100px"}
            preview={false}
            alt={"Light abstract circle"}
            src={
              isDarkMode
                ? "/dark-abstract-circle.png"
                : "/light-abstract-circle.png"
            }
          />
        </div>

        <div
          className="splash-image-container w-full h-full lg:w-1/2 rounded-4xl bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: "var(--splash-image)",
          }}
        >
          <img
            src={imageLink}
            alt="Splash Image"
            className="splash-image w-full h-full object-contain"
          />
        </div>
      </div>

      <FloatButton
        type="primary"
        style={{ right: 24 }}
        onClick={toggleDarkMode}
        icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
        tooltip={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      />
    </div>
  );
}

export default App;
