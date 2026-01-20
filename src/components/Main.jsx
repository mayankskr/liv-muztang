import Description from "./Description";
import ImageAndTextContainer from "./ImageAndTextContainer";
import BenefitCardContainer from "./BenefitCardContainer";

function Main(){
    return(
        <div className="Main">
            <Description></Description>
            <ImageAndTextContainer></ImageAndTextContainer>
            <br />
            <BenefitCardContainer></BenefitCardContainer>
        </div>
    )
}
export default Main;