import './index.css';

const NavLines = ({setHeroSlideNumberByIndex, icon}) => {
    return (
        <div onClick={setHeroSlideNumberByIndex}>
            <img src={'/' + icon} className="heroesIcons"></img>
        </div>
    )
};

export default NavLines;