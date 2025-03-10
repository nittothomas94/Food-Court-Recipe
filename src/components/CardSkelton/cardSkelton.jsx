import './cardSkelton.css';
import { Skeleton } from 'antd';

const CardSkelton = () => {
  return (
    <div className="card">
      <Skeleton active={true} />
      <Skeleton active={true} />
      <Skeleton active={true} />
    </div>
  );
};

export default CardSkelton;
