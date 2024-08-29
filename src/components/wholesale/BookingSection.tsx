import {BookingSectionStyled} from "../styled/wholesale/BookingSection.styled";
import BookingCard from "../global/BookingCard";
import Booking1 from "../../assets/pictures/booking1.jpg";
import Booking2 from "../../assets/pictures/booking2.jpg";

const BookingSection = () => {
    return (
        <BookingSectionStyled>
            <h1>CHEF? BOOK A TASTING</h1>
            <div className="bookings">
                <BookingCard backgroundImg={Booking1} link="asd" name="CARNIVALE - NATURALE"></BookingCard>
                <BookingCard backgroundImg={Booking2} link="asd" name="REPORTAGE FARMERS"></BookingCard>
            </div>

        </BookingSectionStyled>
    )
}

export default BookingSection;