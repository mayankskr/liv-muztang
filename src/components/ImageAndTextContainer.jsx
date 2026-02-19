import ImageCard from './ImageCard';
import { CheckIcon } from '@heroicons/react/24/outline';
import PhoneButton from './PhoneButton';
function ImageAndTextContainer({
  heading,
  para,
  infoPoint1,
  infoPoint2,
  infoPoint3,
  infoPhoneButton,
}) {
  return (
    <div className="ImageAndTextContainer flex flex-col md:mt-8 md:flex-row lg:mt-12">
      <div className="ImageContainer gap-2 px-5 pt-5 md:grid md:w-[50%] md:grid-cols-2 md:gap-4">
        <div className="l-continer">
          <ImageCard
            src="https://www.anmolherb.in/assets/img/livmuztang-1.webp"
            alt="Product Image"
            className="h-full"
          ></ImageCard>
        </div>
        <div className="r-container">
          <ImageCard
            src="https://www.anmolherb.in/assets/img/livmuztang-2.webp"
            alt="Product Image"
            className="mb-4 hidden lg:inline lg:h-50"
          ></ImageCard>
          <ImageCard
            src="https://www.anmolherb.in/assets/img/livmuztang-3.webp"
            alt="Product Image"
            className="md:h-full lg:h-fit"
          ></ImageCard>
        </div>
      </div>
      <div className="TextContainer ml-1 md:w-[50%]">
        <div className="mt-4">
          <p className="inline-block bg-linear-to-r from-[#0b1114] via-[#613619] to-[#FF6C00] bg-clip-text py-2 text-left text-2xl font-semibold text-transparent md:text-3xl md:leading-12 lg:mt-4 xl:text-5xl xl:leading-16">
            {heading}
          </p>
          <p className="text-left text-xl font-medium md:text-xl lg:mt-2 xl:text-2xl">
            {para}
          </p>
        </div>
        <div>
          <p className="md:text-md my-3 font-semibold lg:text-2xl xl:my-5">
            <CheckIcon className="mx-3 inline h-6 w-6 rounded-full bg-[#FF6C00] stroke-4 p-0.5 text-white"></CheckIcon>
            {infoPoint1}
          </p>
          <p className="md:text-md my-3 font-semibold lg:text-2xl xl:my-5">
            <CheckIcon className="mx-3 inline h-6 w-6 rounded-full bg-[#FF6C00] stroke-4 p-0.5 text-white"></CheckIcon>
            {infoPoint2}
          </p>
          <p className="md:text-md my-3 font-semibold lg:text-2xl xl:my-5">
            <CheckIcon className="mx-3 inline h-6 w-6 rounded-full bg-[#FF6C00] stroke-4 p-0.5 text-white"></CheckIcon>
            {infoPoint3}
          </p>
        </div>
        <PhoneButton
          content={
            <>
              <b>{infoPhoneButton}</b>
            </>
          }
        />
      </div>
    </div>
  );
}

export default ImageAndTextContainer;
