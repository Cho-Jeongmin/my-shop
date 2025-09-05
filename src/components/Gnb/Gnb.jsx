import React from "react";
import {
  Wrapper,
  Top,
  Buttons,
  Button,
  Bar,
  Middle,
  LogoWrapper,
  Categories,
  Category,
  Tools,
  SearchWrapper,
  SearchIconWrapper,
  SearchInputWrapper,
  SearchInput,
  Bottom,
  IconWrapper,
} from "./Gnb.styles.js";
import { ReactComponent as JordanIcon } from "../../assets/icons/jordan.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { SLink } from "../../styles/GlobalStyle.js";

const Gnb = () => {
  return (
    <Wrapper>
      <Top>
        <SLink to="/jordan">
          <JordanIcon width={24} height={24} />
        </SLink>
        <Buttons>
          <Button>Find a Store</Button>
          <Bar />
          <Button>Help</Button>
          <Bar />
          <Button>Join Us</Button>
          <Bar />
          <Button>Sign In</Button>
        </Buttons>
      </Top>

      <Middle>
        <LogoWrapper>
          <SLink to="/">
            <LogoIcon className="logo-icon" width={78} height={78} />
          </SLink>
        </LogoWrapper>
        <Categories>
          <Category>
            <SLink to="/category?cat=new">New & Featured</SLink>
          </Category>
          <SLink to="/category?cat=men">
            <Category>Men</Category>
          </SLink>
          <SLink to="/category?cat=women">
            <Category>Women</Category>
          </SLink>
          <SLink to="/category?cat=kids">
            <Category>Kids</Category>
          </SLink>
          <SLink to="/category?cat=snkrs">
            <Category>SNKRS</Category>
          </SLink>
        </Categories>
        <Tools>
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon width={24} height={24} />
            </SearchIconWrapper>
            <SearchInputWrapper>
              <SearchInput placeholder="Search" />
            </SearchInputWrapper>
          </SearchWrapper>
          <IconWrapper>
            <HeartIcon width={24} height={24} />
          </IconWrapper>
          <IconWrapper>
            <CartIcon width={24} height={24} />
          </IconWrapper>
        </Tools>
      </Middle>

      <Bottom></Bottom>
    </Wrapper>
  );
};

export default Gnb;
