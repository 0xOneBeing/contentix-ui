// import { Button, Image } from "antd";
// import "./App.css";
// import { ArrowRightOutlined } from "@ant-design/icons";

// function App() {
//   // const linkButtons = [
//   //   {
//   //     key: 1,
//   //     link: "features",
//   //   },
//   //   {
//   //     key: 2,
//   //     link: "pricing",
//   //   },
//   //   {
//   //     key: 3,
//   //     link: "features",
//   //   },
//   //   {
//   //     key: 4,
//   //     link: "resources",
//   //   },
//   // ];

//   return (
//     <div className="contentix p-10 w-screen h-screen">
//       <div className="w-full h-full flex items-stretch px-6 gap-6">
//         <div className="w-1/2 h-full flex flex-col justify-between">
//           <div className="flex items-center gap-1">
//             <span className="circle w-5 h-5 bg-[#a35cf0] rounded-full text-white"></span>
//             <h1 className="font-bold">CONTENTIX</h1>
//           </div>

//           <div>
//             <h1 className="w-[470px] text-6xl font-bold mb-6">
//               Bring your <em className="font-light">vision</em> to{" "}
//               <span className="font-light">life</span> in{" "}
//               <span className="text-[#a35cf0]">seconds</span> with AI.
//             </h1>

//             <p className="w-[450px] text-base mb-6">
//               With our smart tools, you can generate stunning visuals and
//               content in seconds. Designed for creators, marketers, and
//               innovators who movefast and think big.
//             </p>

//             <Button
//               icon={
//                 <div className="bg-white text-black flex items-center justify-center rounded-full w-5 h-5 p-3">
//                   <ArrowRightOutlined />
//                 </div>
//               }
//               type="primary"
//               style={{ borderRadius: "9999px", padding: "25px 20px" }}
//               iconPosition="end"
//             >
//               Book appointment
//             </Button>
//           </div>

//           <Image
//             width={"100px"}
//             preview={false}
//             alt={"Light abstract circle"}
//             src={"/light-abstract-circle.png"}
//           />
//         </div>

//         <div
//           className="w-1/2 h-full rounded-4xl"
//           style={{
//             backgroundImage: "url('/light-right-splash.png')",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* <div className="absolute w-full p-5 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               {linkButtons.map((button) => {
//                 return (
//                   <Button
//                     type="text"
//                     style={{
//                       color: "black",
//                       padding: "20px",
//                       fontWeight: "500",
//                       borderRadius: "9999px",
//                       backgroundColor: "white",
//                     }}
//                   >
//                     {button.link[0].toUpperCase() + button.link.slice(1)}
//                   </Button>
//                 );
//               })}
//             </div>

//             <Button
//               type="primary"
//               style={{ borderRadius: "9999px", padding: "25px 20px" }}
//               iconPosition="end"
//             >
//               Get started
//             </Button>
//           </div> */}

//           {/* <Image
//             // width={"100%"}
//             width={"auto"}
//             height={"100%"}
//             className="w-full object-cover"
//             preview={false}
//             alt="Light splash"
//             src="/light-right-splash.png"
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   // Set the theme attribute on the document element
  //   document.documentElement.setAttribute(
  //     "data-theme",
  //     isDarkMode ? "light" : "dark"
  //   );
  // };

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
