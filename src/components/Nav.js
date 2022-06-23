import React from "react";
import { Link } from "react-router-dom";
import '../style/Nav.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav(props) {

    const { itemQuantity } = props;

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -10,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/cart' className="cart-button-container">                   
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={itemQuantity} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;