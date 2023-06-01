import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
 import "./Star.css";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
  
  return (
    <span key={index}>
      {stars >= index + 1
        ? (<FaStar className ="icon" />)
        : stars >= number
        ? (<FaStarHalfAlt className="icon" />)
        : (<AiOutlineStar className="icon" />
      )}
    </span>
  );
      });
      

return (
   
    <div className="icon-style">
      {ratingStar}
      <p>({reviews} customer reviews)</p>
    </div>
   
)
};

// const Wrapper = styled.section`
// .icon-style {
//   display: flex;
//   gap: 0.2rem;
//   align-item: center;
//   justify-content: flex-start;

//   .icon {
//     font-size: 2rem;
//     color: orange;
//   }
//   .empty-icon {
//     font-size: 2.6rem
//   }
//   p{
//     margin:0;
//     padding-left: 1.2rem;
//   }

//   }`





export default Star;
