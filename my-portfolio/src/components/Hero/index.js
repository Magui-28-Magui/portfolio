import React from 'react';
import ImageAboutMe from "../../assets/img/aboutmeimage.png";
import {Image, ColLeft, ColRight} from "./styles";

export default function Hero() {
  return (
    <div className='row'>
      <ColLeft className='col-md-6'>
        hola
      </ColLeft>
      <ColRight className='col-md-6'>
        <Image src={ImageAboutMe} alt="aboutme" />

      </ColRight>
    </div>
  );
}
