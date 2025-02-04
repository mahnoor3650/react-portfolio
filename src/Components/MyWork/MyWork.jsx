import "./mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Work_Data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>MY Work</h1> <img src={theme_pattern} alt="" />{" "}
      </div>
      <div className="work-container">
        {Work_Data.map((work, index) => {
          return (
            // <div className="work-format" key={index}>
            //   <h3> {service.w_no}</h3> <h2> {service.w_name}</h2>
            //   <p> {service.w_img}</p>
            //   <div className="work-readMore">
            //     <p>Read More</p> <img src={arrow_icon} alt="" />
            //   </div>
            // </div>
            <img key={index} src={work.w_img} alt="" />
          );
        })}
      </div>
      <div className="show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
