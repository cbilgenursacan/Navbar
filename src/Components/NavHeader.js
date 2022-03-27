import {NavLink} from 'react-router-dom';
import classes from '../CSS/NavHeader.module.css';

const NavHeader = () =>{
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Main 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/welcome'>
                            Welcome 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/product'>
                            Products 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavHeader