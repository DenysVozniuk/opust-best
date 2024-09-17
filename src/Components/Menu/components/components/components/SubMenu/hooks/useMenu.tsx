import { useState } from "react";

const useMenu = () => {
    const [checkSubMenu, setCheckSubMenu] = useState<boolean>(false);
    const [subMenuHidden, setSubMenuHidden] = useState<boolean>(false);
    const [intermediateSubMenuHidden, setIntermediateSubMenuHidden] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const menuChangeStateStart = (subMenu: boolean) => {
      if(subMenu){
          setIsAnimating(true);
          setSubMenuHidden((prevState) => prevState === true ? false : prevState);
          setIntermediateSubMenuHidden((prevState) => prevState === true ? false : prevState);
      }
      else {
          setIsAnimating(true);
          setIntermediateSubMenuHidden((prevState) => prevState === false ? true : prevState);
      }
    }
    const menuChangeStateFinish = (menuRef: React.RefObject<HTMLUListElement>, subMenu: boolean) => {
      if(menuRef.current){
          if(subMenu){
            menuRef.current.style.setProperty('--menu-height', menuRef.current.offsetHeight + 'px');
            setCheckSubMenu((prevState) => prevState === false ? true : prevState);
            setTimeout(() => {
              setIsAnimating(false);
          }, 250);
          }
          else {
            setCheckSubMenu((prevState) => prevState === true ? false : prevState);
            setTimeout(() => {
              setSubMenuHidden((prevState) => prevState === false ? true : prevState);
            }, 150);
            setTimeout(() => {
              setIsAnimating(false);
            }, 160);
          }
      }      
    }
    return {
        menuChangeStateStart,
        menuChangeStateFinish,
        checkSubMenu,
        subMenuHidden,
        intermediateSubMenuHidden,
        isAnimating,
    };
}

export default useMenu;