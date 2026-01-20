function BenefitCard({Icon}){
    const [MainIcon,BadgeIcon]= Icon
    return(
        <div className="BenefitCard flex justify-between bg-white rounded-3xl aspect-4/1 m-1 p-2">
            <MainIcon className="w-6 h-6"/>
            <BadgeIcon className="w-6 h-6"/>
        </div>
    )
}

export default BenefitCard