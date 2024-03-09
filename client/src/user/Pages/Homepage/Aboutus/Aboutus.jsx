import "./Aboutus.css";
import CountUp from 'react-countup';
const Aboutus = () => {
  return (
    <>
      <div className="home-aboutus-container">
        <h1 className="home-aboutus-heading">About Our Website</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing <br />
          elit. Iusto totam assumenda blanditiis distinctio est impedit
          molestiae. <br />
          Debitis ab labore voluptas animi numquam ipsum voluptatibus,
          reiciendis amet sed dignissimos <br />
          eligendi impedit.
        </p>

        <div className="home-aboutus-bottom">
          <div className="home-aboutus-child1">
            <p>Award won</p>
            <h1><CountUp end={100} duration={2}/> + </h1>
          </div>
          <div className="home-aboutus-child1">
            <p>Award won</p>
            <h1><CountUp end={100} duration={2}/> + </h1>
          </div>
          <div className="home-aboutus-child1">
            <p>Award won</p>
            <h1><CountUp end={100} duration={2}/> + </h1>
          </div>
          <div className="home-aboutus-child1">
            <p>Award won</p>
            <h1><CountUp end={100} duration={2}/> + </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
