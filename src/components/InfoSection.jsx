import memberPicture from "../assets/member.png";
import profilePicture from "../assets/profile.png";
import data from "../assets/data/content.json";
import "./InfoSection.css";
import { motion } from "framer-motion";
function InfoSection() {
  const title = data.content.header;
  const bodyData = data.content.body;
  return (
    <div
      style={{
        backgroundColor: "#0078E8",
        margin: 0,
        padding: 0,
        display: "block",
        gap: 0,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
          }}
        >
          <div className="left">
            <div style={{ textAlign: "center" }}>
              <motion.img
                src={memberPicture}
                className="logo"
                alt="Vite logo"
                style={{
                  width: "20vw",
                }}
                initial={{
                  x: -450,
                }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
          <div className="right">
            <div style={{ textAlign: "center" }}>
              <motion.img
                src={profilePicture}
                className="logo"
                alt="Vite logo"
                style={{
                  width: "10vw",
                }}
              />
              <h1
                style={{
                  color: "white",
                  fontFamily: "-moz-initial",
                }}
              >
                <i>"I love blueprint!"</i>
              </h1>
              <h1
                style={{
                  margin: "0",
                  color: "white",
                  fontFamily: "MyFont",
                }}
              >
                - John Doe
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
          }}
        >
          <div className="left">
            <div
              style={{
                color: "white",
              }}
            >
              <h1>{title}</h1>
              <p>{bodyData}</p>
            </div>
          </div>
          <div className="right">
            <div style={{ textAlign: "center" }}>
              <motion.img
                src={memberPicture}
                className="logo"
                alt="Vite logo"
                style={{
                  width: "20vw",
                }}
                initial={{
                  x: 400,
                }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
