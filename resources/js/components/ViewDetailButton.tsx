import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import Button from "./Button";

const ViewDetailButton = ({ href }) => {
    return (
        <>
            <Link to={href}>
                <Button>
                    Xem chi tiết
                    <ArrowRightIcon />
                </Button>
            </Link>
        </>
    );
};

export default ViewDetailButton;
