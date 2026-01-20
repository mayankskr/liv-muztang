import ImageCard from "./ImageCard";
import { CheckIcon } from "@heroicons/react/24/outline";
import PhoneButton from "./PhoneButton";
function ImageAndTextContainer(){

    return(
        <div className="ImageAndTextContainer flex flex-col md:flex-row md:mt-8 lg:mt-12">
            <div className="ImageContainer md:w-[50%]
            pt-5 px-5 gap-2
            md:grid md:grid-cols-2 md:gap-4">
                <div className="l-continer">
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-1.webp" alt="Product Image"
                className="h-full"
                ></ImageCard>
                </div>
                <div className="r-container">
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-2.webp" alt="Product Image"
                className="hidden 
                lg:inline lg:h-50 mb-4"
                ></ImageCard>
                <ImageCard src="https://www.anmolherb.in/assets/img/livmuztang-3.webp" alt="Product Image"
                className="md:h-full lg:h-fit"
                ></ImageCard>
                </div>
            </div>
            <div className="TextContainer ml-1 md:w-[50%]">
                <div className="mt-4">
                <p className="inline-block font-semibold text-2xl py-2
                bg-linear-to-r from-[#0b1114] via-[#613619] to-[#FF6C00] bg-clip-text text-transparent md:text-3xl
                xl:text-5xl md:leading-12 xl:leading-16 text-left lg:mt-4">सिर्फ चुनिंदा पुरुषों के लिए - Limited Edition Formula.</p>
                <p className="text-xl  md:text-xl font-medium lg:mt-2 text-left xl:text-2xl">बिना थके बने रहे पावर टॉनिक से अफ़ीकन पुरुषो जैसी पावर पाए</p>
                </div>
                <div>
                    <p className="font-semibold md:text-md lg:text-2xl my-3 xl:my-5"><CheckIcon className="inline h-6 w-6 bg-[#FF6C00] rounded-full p-0.5 text-white stroke-4 mx-3"></CheckIcon>ये एक प्रीमियम पावर टॉनिक है।</p>
                    <p className="font-semibold md:text-md lg:text-2xl my-3 xl:my-5"><CheckIcon className="inline h-6 w-6 bg-[#FF6C00] rounded-full p-0.5 text-white stroke-4 mx-3"></CheckIcon>जो खास उन पुरुषों के लिए बनाया गया है।</p>
                    <p className="font-semibold md:text-md lg:text-2xl my-3 xl:my-5"><CheckIcon className="inline h-6 w-6 bg-[#FF6C00] rounded-full p-0.5 text-white stroke-4 mx-3"></CheckIcon>जो extra strength + stamina चाहते हैं।</p>
                </div>
                <PhoneButton content={<><b>जल्द बुक करें +91-9311900247</b> </>} />
            </div>
        </div>
    )
}

export default ImageAndTextContainer;