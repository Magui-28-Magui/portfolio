import React from 'react'
import {PrimaryNav, MenuLink, Menu, Hamburger, GetInTouch, ImageNavbar, GetInTouchText} from './styles';
import ImageLogo from "./../../assets/img/logo-m-3d.png";

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <ImageNavbar src={ImageLogo} alt="logo" />
                <Hamburger />
                <Menu>
                    <MenuLink>
                        Home
                    </MenuLink>
                    <MenuLink>
                        About me
                    </MenuLink>
                    <MenuLink>
                        Services 
                    </MenuLink>
                    <MenuLink>
                        Projects 
                    </MenuLink>
                </Menu>
                <GetInTouch>
                    <GetInTouchText>
                        Get in Touch
                    </GetInTouchText>
                </GetInTouch>
            </PrimaryNav>
        </>
    )
}
export default Navbar