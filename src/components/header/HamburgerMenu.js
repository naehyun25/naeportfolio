import React,{useState,useRef} from "react";
import './HamburgerMenu.css';


    
const HamburgerMenu= ({appElement}) => {
    const [hover, setHover] = useState(false);
    function mouseOver(){setHover(true);
    }
    function mouseLeave(){setHover(false);
    }
    // 햄버거메뉴
    // const [app, setApp] = useState();

    const hamburger = useRef();
    function openBurger(){
        hamburger.current.classList.add('open') 
        console.log('click')
        // setApp(true)
        appElement(true)
    }
    function closeBurger(){
        hamburger.current.classList.remove('open')
        // setApp(false)
        appElement(false)
    }
    return(
        <div className="hamburgerWrap">
            <button className="hamburgerBtn" 
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={openBurger}
            >
                <span className={hover? "shortbar" : "longbar"}/>
                <span/>
                <span className={hover? "longbar" : "shortbar"}/>
            </button>
            <div className="hamburgerContent" ref={hamburger}>
                <div>hi</div>
                <div>
                    <button onClick={closeBurger}>X</button>
                </div>
            </div>
        </div>
        
    )
};

export default HamburgerMenu;