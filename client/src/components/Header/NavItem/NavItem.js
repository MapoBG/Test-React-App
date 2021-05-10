import style from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={style.listItem}><a href="#">{props.children}</a></li>
    );
};

export default NavItem;