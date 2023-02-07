import React from 'react'
import {PrimaryNav, MenuLink, Menu, Hamburger} from './styles';

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Hamburger />
                <Menu>
                    <MenuLink>
                        HOME
                    </MenuLink>
                </Menu>
            </PrimaryNav>
        </>
    )
}
export default Navbar