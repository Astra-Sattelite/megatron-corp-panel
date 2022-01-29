import React from 'react';

import './App.scss'


export const Header = () => {
  return (
    <div className="Header">
      <input 
        className="HeaderSearch"
        list="finder-list" 
        id="finder" 
        name="finder" 
        placeholder="Поиск. . ."
      />
      <datalist id="finder-list">
        <option value="Человек Человеков" />
        <option value="Что-то что можно искать" />
        <option value="Megatron Corp." />
      </datalist>

      <div className="HeaderAccountBlock">
        <div className="HeaderAccountImg">К. Ч.</div>
        <div className="HeaderAccountText">Человек К. Ч.</div>
      </div>
    </div>
  )
};
