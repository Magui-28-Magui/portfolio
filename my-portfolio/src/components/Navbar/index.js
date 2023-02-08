import React from 'react'
import {PrimaryNav, MenuLink, Menu, Hamburger, GetInTouch} from './styles';

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Hamburger />
                <Menu>
                    <MenuLink>
                        HOME
                    </MenuLink>
                    <MenuLink>
                        HOME
                    </MenuLink>
                </Menu>
                <GetInTouch>Get in Touch</GetInTouch>
            </PrimaryNav>
        </>
    )
}
export default Navbar