import Description from './Description';
import ImageAndTextContainer from './ImageAndTextContainer';
import BenefitCardContainer from './BenefitCardContainer';
import ImageAndTextContainer2 from './ImageAndTextContainer2';
import CommentCardContainer from './CommentCardContainer';
import Footer from './Footer';
function Main() {
  return (
    <div className="Main">
      <Description></Description>
      <ImageAndTextContainer></ImageAndTextContainer>
      <br />
      <BenefitCardContainer></BenefitCardContainer>
      <br />
      <ImageAndTextContainer2></ImageAndTextContainer2>
      <br />
      <CommentCardContainer></CommentCardContainer>
      <br />
      <Footer></Footer>
    </div>
  );
}
export default Main;
