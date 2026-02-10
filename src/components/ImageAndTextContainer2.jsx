import ImageCard from './ImageCard';
import { CheckIcon } from '@heroicons/react/24/outline';
import PhoneButton from './PhoneButton';
import { UsersIcon } from '@heroicons/react/24/solid';
function ImageAndTextContainer2({content}) {
  return (
    <>
      <h1 className="bg-linear-to-r from-[#0b1114] via-[#613619] to-[#FF6C00] bg-clip-text text-center text-3xl leading-12 text-transparent md:text-5xl md:leading-18">
        {content.ingredientsHeading}
      </h1>

      <div className="ImageAndTextContainer2 flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="TextContainer m-2 md:w-1/2">
          <p className="flex items-start text-xl font-bold xl:m-4">
            <CheckIcon className="m-1 h-14 w-14 rounded-2xl bg-[#ece9e4] p-4 text-[#c15200]" />
            <span className="my-auto">{content.ingredientsPoint1}</span>
          </p>
          <p className="flex items-start text-xl font-bold xl:m-4">
            <CheckIcon className="m-1 h-14 w-14 rounded-2xl bg-[#ece9e4] p-4 text-[#c15200]" />
            <span className="my-auto">{content.ingredientsPoint2}</span>
          </p>
          <p className="flex items-start text-xl font-bold xl:m-4">
            <CheckIcon className="m-1 h-14 w-14 rounded-2xl bg-[#ece9e4] p-4 text-[#c15200]" />
            <span className="my-auto">{content.ingredientsPoint3}</span>
          </p>
          <p className="flex items-start text-xl font-bold xl:m-4">
            <CheckIcon className="m-1 h-14 w-14 rounded-2xl bg-[#ece9e4] p-4 text-[#c15200]" />
            <span className="my-auto mb-8">
              {content.ingredientsPoint4}
            </span>
          </p>
          <PhoneButton content={content.ingredientsPhoneButton} />
        </div>

        <div className="ImageContainer h-stretch relative m-2 mx-auto md:w-1/2">
          <div>
            <ImageCard
              src="https://www.anmolherb.in/assets/img/livmuztang-4.webp"
              alt="couple holding product"
              className="relative mx-auto w-[90%] rounded-2xl object-cover md:mr-4 md:w-96 lg:w-120 xl:w-135"
            ></ImageCard>
          </div>
          <div className="absolute right-4 bottom-0 flex h-12 w-34 items-center rounded-2xl bg-white p-1">
            <UsersIcon className="h-10 min-w-10 rounded-xl bg-[#FF6C00] p-2 text-white"></UsersIcon>
            <div className="flex w-full flex-col items-center">
              <p className="text-md font-medium">10lac+</p>
              <p className="text-center text-xs">Happy Users</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageAndTextContainer2;
