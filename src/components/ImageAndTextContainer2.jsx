import ImageCard from "./ImageCard"
import { CheckIcon } from "@heroicons/react/24/outline";
import PhoneButton from "./PhoneButton"
import {UsersIcon} from "@heroicons/react/24/solid";
function ImageAndTextContainer2(){
  return (
    <>
      <h1 className="text-3xl md:text-5xl leading-12 md:leading-18 text-center
          bg-linear-to-r from-[#0b1114] via-[#613619] to-[#FF6C00] bg-clip-text text-transparent
      ">
        अफ्रीकन मुलोंडो की शक्ति के साथ रात को थकना मना है।
      </h1>

      <div className="ImageAndTextContainer2 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="TextContainer m-2 md:w-1/2">
        
          <p className="text-xl font-bold flex items-start xl:m-4">
            <CheckIcon className="h-14 w-14 bg-[#ece9e4] rounded-2xl text-[#c15200] m-1 p-4"/>
            <span className="my-auto">अफ्रीकन मुलोंडो</span>
          </p>
           <p className="text-xl font-bold flex items-start xl:m-4">
            <CheckIcon className="h-14 w-14 bg-[#ece9e4] rounded-2xl text-[#c15200] m-1 p-4"/>
            <span className="my-auto">अश्वगंधा</span>
          </p>
           <p className="text-xl font-bold flex items-start xl:m-4">
            <CheckIcon className="h-14 w-14 bg-[#ece9e4] rounded-2xl text-[#c15200] m-1 p-4"/>
            <span className="my-auto">गोक्षुरा</span>
          </p>
            <p className="text-xl font-bold flex items-start xl:m-4">
            <CheckIcon className="h-14 w-14 bg-[#ece9e4] rounded-2xl text-[#c15200] m-1 p-4"/>
            <span className="my-auto mb-8">शतावरी जैसी जड़ीबूटियों के लाभ पाने के लिए</span>
          </p>
          <PhoneButton content="जल्द बुक करें +91-9311900247" />
        </div>

        <div className="ImageContainer relative mx-auto m-2 md:w-1/2 h-stretch ">
            <div>
            <ImageCard
                src="https://www.anmolherb.in/assets/img/livmuztang-4.webp"
                alt="couple holding product"
                className="w-[90%] mx-auto md:w-96 lg:w-120 xl:w-135 object-cover rounded-2xl md:mr-4 relative"
            >
            </ImageCard>
            </div>
            <div className="w-34 h-12 p-1 rounded-2xl bg-white flex items-center absolute bottom-0 right-4">
                <UsersIcon className="h-10 min-w-10 rounded-xl p-2 text-white bg-[#FF6C00]"></UsersIcon>
                <div className="flex flex-col items-center w-full">
                    <p className="text-md font-medium">10lac+</p>
                    <p className="text-xs text-center">Happy Users</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ImageAndTextContainer2
