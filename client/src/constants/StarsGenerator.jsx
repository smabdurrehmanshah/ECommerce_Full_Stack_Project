import { Star, StarHalf } from "lucide-react";

function StarsGenerator({ rating, size, stroke = "0", fill = "#edcf5d" }) {
  return Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <Star fill={fill} stroke={stroke} size={size} />
        ) : rating >= number ? (
          <StarHalf fill={fill} stroke={stroke} size={size} />
        ) : (
          <Star stroke={fill} size={size} />
        )}
      </span>
    );
  });
}

export default StarsGenerator;
