import Description from './Description';
import ImageAndTextContainer from './ImageAndTextContainer';
import BenefitCardContainer from './BenefitCardContainer';
import ImageAndTextContainer2 from './ImageAndTextContainer2';
import CommentCardContainer from './CommentCardContainer';
import Footer from './Footer';
import QueryForm from './QueryForm';
function Main({ content }) {
  return (
    <div className="Main">
      <Description
        heading={content.heroHeading}
        para={content.heroPara}
      ></Description>
      <ImageAndTextContainer
        heading={content.infoHeading}
        para={content.infoPara}
        infoPoint1={content.infoPoint1}
        infoPoint2={content.infoPoint2}
        infoPoint3={content.infoPoint3}
        infoPhoneButton={content.infoPhoneButton}
      ></ImageAndTextContainer>
      <br />
      <BenefitCardContainer></BenefitCardContainer>
      <br />
      <ImageAndTextContainer2 content={content}></ImageAndTextContainer2>
      <br />
      <CommentCardContainer></CommentCardContainer>
      <br />
      <QueryForm></QueryForm>
      <br />
      <Footer></Footer>
    </div>
  );
}
export default Main;
