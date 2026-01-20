import BenefitCard from "./BenefitCard";
import { BoltIcon, PercentBadgeIcon, HeartIcon, UserIcon, Battery100Icon } from "@heroicons/react/24/outline";

function BenefitCardContainer(){
    return(
        <div className="BenefitCardContainer grid grid-cols-2 md:flex md:aspect-5/1">
            <BenefitCard Icon={[BoltIcon,PercentBadgeIcon]}></BenefitCard>
            <BenefitCard Icon={[HeartIcon,PercentBadgeIcon]}></BenefitCard>
            <BenefitCard Icon={[UserIcon,PercentBadgeIcon]}></BenefitCard>
            <BenefitCard Icon={[Battery100Icon,PercentBadgeIcon]}></BenefitCard>
        </div>
    )
}
export default BenefitCardContainer