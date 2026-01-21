import BenefitCard from "./BenefitCard";
import { BoltIcon, PercentBadgeIcon, HeartIcon, UserIcon, Battery100Icon } from "@heroicons/react/24/solid";

function BenefitCardContainer(){
    return(
        <div className="BenefitCardContainer grid grid-cols-2 auto-rows-fr md:flex md:flex-shrink:1 xl:aspect-10/1 gap-4 mx-4">
            <BenefitCard Icon={[BoltIcon,PercentBadgeIcon]} text="एनर्जी और स्टैमिना बूस्ट"></BenefitCard>
            <BenefitCard Icon={[HeartIcon,PercentBadgeIcon]} text="बेहतर बेड परफॉर्मेंस सपोर्ट"></BenefitCard>
            <BenefitCard Icon={[UserIcon,PercentBadgeIcon]} text="मर्दाना ताकत और जोश"></BenefitCard>
            <BenefitCard Icon={[Battery100Icon,PercentBadgeIcon]} text="थकान कम, एक्टिव ज्यादा"></BenefitCard>
        </div>
    )
}
export default BenefitCardContainer