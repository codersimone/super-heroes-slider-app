import './index.css';

const NavLines = ({linesNames, setHeroSlideNumberByIndex}) => {
    return (
        <div onClick={setHeroSlideNumberByIndex}>{linesNames}</div>
    )
};

export default NavLines;