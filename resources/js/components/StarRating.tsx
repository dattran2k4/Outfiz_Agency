import { StarIcon } from "./Icons";

const StarRating = ({ rating = 5, totalStars = 5 }) => {
    return (
        <div className="flex gap-2">
            {[...Array(totalStars)].map((_, index) => {
                // index chạy từ 0 -> 4
                // Nếu rating = 4, thì index 0,1,2,3 sẽ filled (true), index 4 false
                const isFilled = index < rating;

                return <StarIcon key={index} filled={isFilled} />;
            })}
        </div>
    );
};

export default StarRating;
