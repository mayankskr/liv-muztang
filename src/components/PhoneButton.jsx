import { PhoneIcon, UserIcon } from '@heroicons/react/24/solid';

function PhoneButton(){
    return(
        <div className="relative inline-flex">
            {/* Glow layer */}
            <div className="absolute inset-0 -z-10  blur-lg 
                            bg-linear-to-r from-[#FF6C00] to-[#a04300] 
                            opacity-70">
            </div>

            {/* Button */}
            <a
                href=""
                className="flex items-center gap-2
                        bg-linear-to-r from-[#FF6C00] to-[#a04300]
                        text-white rounded-3xl px-4 py-2 h-10
                        hover:brightness-90
                        transition ease-in-out duration-150"
            >
                <PhoneIcon className="h-6 w-6" />
                <p className="font-medium">+91-9311900247</p>
            </a>
        </div>
    )
}

export default PhoneButton;