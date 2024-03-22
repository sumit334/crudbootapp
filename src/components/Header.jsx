import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const Top = styled(AppBar)`
    align-items: center;
    position: relative;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    justify-content: space-between;
    text-decoration: none;
    font-size: 20px;
`;

const Navigation = styled(Toolbar)`
    display: flex;
    align-items: center;

    & > a {
        padding: 10px 15px;
        color: #000;
        text-decoration: none;
        transition: background-color 0.3s;
        border-radius: 10px;

        &:hover {
            background-color: #e0e0e0;
        }

        &.active {
            background-color: #4caf50;
            color: white;
        }
    }
`;
const Header = () => {
    const location = useLocation();
    return (
        <Top position="static">
            <Navigation>
                <Tabs to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Tabs>
                <Tabs to="/all" className={location.pathname === '/all' ? 'active' : ''}>ALL USERS</Tabs>
                <Tabs to="/add" className={location.pathname === '/add' ? 'active' : ''}>ADD USER</Tabs>
            </Navigation>
        </Top>
    )
}

export default Header;