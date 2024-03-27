import memberPicture from "../assets/member.png";
import profilePicture from "../assets/profile.png";
import data from "../assets/data/content.json";
import "./InfoSection.css";
function InfoSection() {
  const title = data.content.header;
  const bodyData = data.content.body;
  return (
    <div
      style={{
        backgroundColor: "#0078E8",
        margin: 0,
        padding: 0,
      }}
    >
      <div>
        <ul>
          <li className="left">
            <div style={{ textAlign: "center" }}>
              <img
                src={memberPicture}
                className="logo"
                alt="Vite logo"
                style={{
                  width: "20vw",
                }}
              />
            </div>
          </li>
          <li className="right">
            <div style={{ textAlign: "center" }}>
              <img
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
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="left">
            <div
              style={{
                color: "white",
              }}
            >
              <h1>{title}</h1>
              <p>{bodyData}</p>
            </div>
          </li>
          <li className="right">
            <div style={{ textAlign: "center" }}>
              <img
                src={memberPicture}
                className="logo"
                alt="Vite logo"
                style={{
                  width: "20vw",
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoSection;
