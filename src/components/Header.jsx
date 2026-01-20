import PhoneButton from "./PhoneButton"
function Header(){
    window.addEventListener("scroll",()=>{
        const header = document.getElementById("header")
        if(window.scrollY>5) header.classList.add("backdrop-blur-md", "bg-white/30")
        else header.classList.remove("backdrop-blur-md", "bg-white/30")
    })
    return(        
        <div id="header" className="header w-screen max-h-18
        flex justify-between 
        px-2 py-3 
        fixed z-10  
        transition duration-300
        md:px-8 ">
            <img src="https://www.anmolherb.in/assets/img/logo.png" alt="Liv Muztang" className="h-10 w-auto"/>
            <PhoneButton content="+91-9311900247"></PhoneButton>
        </div>
    )
}

export default Header