import NavItem from '../Header/NavItem/NavItem';
import style from './Footer.module.css';
import navStyle from '../Header/NavItem/NavItem.module.css';

const Footer = ({ children }) => {
    return (
        <footer className={style.Footer}>
            <ul>
                <NavItem>Going to 1</NavItem>
                <NavItem>Going to 2</NavItem>
                <NavItem>Going to 3</NavItem>
                <NavItem>Going to 4</NavItem>
                <NavItem>Going to 5</NavItem>
                <NavItem>Going to 6</NavItem>
                <NavItem>Going to 7</NavItem>
                <NavItem>Going to 8</NavItem>
                <NavItem>Going to 9</NavItem>
                <NavItem>Going to 10</NavItem>
                <NavItem>Going to 11</NavItem>
                <li className={navStyle.listItem}><img src="blue-origami-bird-flipped.png" alt="white-origami" /></li>
            </ul>
            <p>Software University &copy; 2021</p>
        </footer>
    );
};

export default Footer;