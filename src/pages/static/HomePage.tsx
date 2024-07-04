import {BackPicture, HomepageStyled, HomePageSectionStyled, TextOverlay} from "../../components/styled/Homepage.styled";
import HeroPicture from "../../assets/pictures/hero.png";
import Hero2Picture from "../../assets/pictures/hero2.png";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"

const HomePage = () => {
    return (
        <HomepageStyled>

            {/*first section*/}
            <HomePageSectionStyled sectionHeight="80vh">
                <BackPicture src={HeroPicture} alt="Hero picture"/>
                <TextOverlay>
                    <h1>CARNIVALE</h1>
                    <p>
                        We bring you exceptional foods:
                        pure, distinctive, bursting with taste and value.
                    </p>
                </TextOverlay>
            </HomePageSectionStyled>

            {/*second section*/}
            <HomePageSectionStyled>
                <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>
                <TextOverlay>
                    <span>
                        Carnivale’s tradition-rich, honest food is our celebration of
                        <b> what the norm should be.</b>
                    </span>
                </TextOverlay>
            </HomePageSectionStyled>

            {/*fourth section*/}
            <HomePageSectionStyled>
                <BackPicture src={HomePageBoxes} alt="Boxes picture"/>
                <TextOverlay>
                    <h2>BOXES</h2>
                    <h3>FOR YOU BIG COMPANIES</h3>
                </TextOverlay>
            </HomePageSectionStyled>
        </HomepageStyled>
    )
}


export default HomePage;