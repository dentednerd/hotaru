import "./Timeline.scss";
import { timelineData } from '../../data';

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData.map((item, idx) => (
        <div key={item.companyName} className={`timeline-item ${idx % 2 ? 'right' : 'left'}`}>
          <div className="half">
            <div className="content">
              <h3 className="date">{item.dates}</h3>
              <h2>{item.companyName}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
