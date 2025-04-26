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
    <div
      className="contentix p-10 w-screen h-screen"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <FloatButton
        icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
        type="primary"
        onClick={toggleDarkMode}
        style={{ right: 24 }}
        tooltip={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      />

      <div className="w-full h-full flex items-stretch px-6 gap-6">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="flex items-center gap-1">
            <span className="circle w-5 h-5 bg-[var(--primary-color)] rounded-full text-white"></span>
            <h1 className="font-bold">CONTENTIX</h1>
          </div>

          <div>
            <h1 className="w-[470px] text-6xl font-bold mb-6">
              Bring your <em className="font-light">vision</em> to{" "}
              <span className="font-light">life</span> in{" "}
              <span className="text-[var(--primary-color)]">seconds</span> with
              AI.
            </h1>

            <p className="w-[450px] text-base mb-6">
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
          className="w-1/2 h-full rounded-4xl"
          style={{
            backgroundImage: "var(--splash-image)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default App;
