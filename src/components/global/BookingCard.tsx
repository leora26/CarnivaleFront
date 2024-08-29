import { BookingCardStyled } from "../styled/global/BookingCard.styled";
import React from "react";
import { Link } from "react-router-dom";

interface BookingCardProps {
    link: string;
    name: string;
    backgroundImg: string;
}

const BookingCard: React.FC<BookingCardProps> = (props) => {
    return (
        <BookingCardStyled className="bookingCard">
            <h2>{props.name}</h2>
            <Link to={props.link}>
                <svg width="800" height="640" viewBox="0 0 800 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="booking">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 24C0 10.7452 10.7452 0 24 0H776C789.255 0 800 10.7452 800 24V616C800 629.255 789.255 640 776 640H24C10.7452 640 0 629.255 0 616V24ZM732.382 510C732.382 538.299 709.3 561 681.123 561C668.505 561 656.909 556.447 647.949 548.878C640.321 542.433 625.986 541 616 541V541H52C38.7452 541 28 530.255 28 517V500C28 486.745 38.7452 476 52 476H616V476C626.553 476 642.201 475.194 650.707 468.949C659.232 462.69 669.764 459 681.123 459C709.3 459 732.382 481.701 732.382 510ZM681.123 543C699.491 543 714.382 528.225 714.382 510C714.382 491.775 699.491 477 681.123 477C662.755 477 647.865 491.775 647.865 510C647.865 528.225 662.755 543 681.123 543Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>
                    <image href={props.backgroundImg} width="800" height="640"
                           clip-path="url(#booking)"
                           preserveAspectRatio="xMidYMid slice"/>

                    <path
                        d="M664.143 507.355H691.641L681.662 498.648L684.328 496.322L698.857 509L684.328 521.678L681.662 519.352L691.641 510.645H664.143V507.355Z"
                        fill="white"/>
                </svg>
            </Link>
        </BookingCardStyled>
    )
}

export default BookingCard;
