import PhoneButton from "./PhoneButton"
function Header(){
    return(        
        <div className="w-screen flex justify-between px-2 py-1 max-h-18 md:px-8 fixed top-0">
            <img src="https://www.anmolherb.in/assets/img/logo.png" alt="Liv Muztang" className="h-10 w-auto"/>
            <PhoneButton></PhoneButton>
        </div>
    )
}

export default Header