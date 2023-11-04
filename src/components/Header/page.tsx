"use client";

import { FC, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from "./Navigation";
import "./hamburger.css";

const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
        setOpen((prevState) => !prevState);
    };

    const scrollTop = (): number => {
        return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    };
    const [Top, setIsTop] = useState<boolean>(true);

    const onScroll = (): void => {
      const position = scrollTop();
      if (position >= 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    useEffect(() => {
      document.addEventListener("scroll", onScroll);
      return (): void => document.removeEventListener("scroll", onScroll);
    });

    const  scrollStyle: React.CSSProperties = Top
      ? { backgroundColor: "" }
      : { backgroundColor: "#fff", opacity: 1 };
    

    return (
        <>
            <header id="header" className='header w-full py-4 pl-4 pr-8' style={scrollStyle}>
                <div className="w-full flex justify-between items-center">
                    <Logo />
                    <ToggleButton
                        open={open}
                        controls="navigation"
                        label="メニューを開く"
                        onClick={toggleFunction}
                    />
                    <Navigation id="navigation" open={open} />
                </div>
            </header>
        </>
    );
};

export default Header;
