import React, { useState } from 'react';

import './App.scss'
import * as R from "ramda"

type MkMenuItemProps = {
  text: string, 
  img: string,
  isMenuOpen: boolean
}

export const MkMenuItem: React.FC<MkMenuItemProps> = props => {

  console.log(props.isMenuOpen)

  return (
    <div className="MenuItem">
      <div className="MenuItemImgContainer">
        <div className="MenuItemImg" 
          style={{backgroundImage: props.img}}
        />
      </div>
      { props.isMenuOpen 
        ? <label className="MenuItemText">{props.text}</label>
        : <></>
      }
    </div>
  )
};

export const Menu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const itemsData = [
    ["COMPANY_NAME", "url(https://www.denofgeek.com/wp-content/uploads/2018/12/megatron.jpg?resize=768%2C432)"],
    ["Главная", ""],
    ["Клиенты", ""],
    ["Сотрудники", ""],
    ["Аналитика", ""]
  ]

  return (
    <div className="Menu"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      {R.map(([text, img]) => <MkMenuItem text={text} img={img} isMenuOpen={isMenuOpen} key={text} />, itemsData)}
    </div>
  )
}
