import Button from "./Button";
import { PhoneIcon } from "../components/Icons";

const ContactButton = () => {
    return (
        <>
            <a href="tel:0989899898" className="text-lg font-semibold">
                <Button variant="outline">
                    <PhoneIcon color="currentColor" />
                    0989.89.9898
                </Button>
            </a>
        </>
    );
};

export default ContactButton;
