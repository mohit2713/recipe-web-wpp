import "./ShimmerUI.css";
import styled from "styled-components";

const ShimmerUI = () => {
  return (
    <div className=" containerShim bg-gray-200 mt-[20%] p-4 m-4">
      <Blur></Blur>
      <h1 className=" heading font-bold text-4xl text-center text-gray-400">
        Loading...
      </h1>
    </div>
  );
};

const Blur = styled.div`
  top: 0;
  right: 0;
  z-index: 0;
  position: absolute;
  width: 528px;
  height: 505px;

  background: linear-gradient(97.37deg, #f15b2b -15.03%, #ff0006 174.67%);
  filter: blur(727px);
  border-radius: 814px;
`;
export default ShimmerUI;
