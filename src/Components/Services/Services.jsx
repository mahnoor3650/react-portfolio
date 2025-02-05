import "./services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Services_Data from '../../assets/services_data';
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>MY Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {Services_Data.map((service,index)=>{
            return <div className="services-format" key={index}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="service-readMore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>

        })}
      </div>
    </div>
  );
};
export default Services;
