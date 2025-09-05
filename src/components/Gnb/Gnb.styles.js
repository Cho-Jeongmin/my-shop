import styled from "styled-components";

export const Wrapper = styled.div``;

export const Top = styled.div`
  background-color: #f5f5f5;
  height: 36px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  font-size: 12px;
  font-family: "Helvetica";
  font-weight: 500;
  cursor: pointer;
`;

export const Bar = styled.div`
  border-left: 1px solid black;
  height: 12px;
  margin: 12px;
`;

export const Middle = styled.div`
  height: 60px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  margin-left: -9px;
  width: 308px;

  .logo-icon {
    cursor: pointer;
  }
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const Category = styled.div`
  font-family: "Helvetica";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const Tools = styled.div`
  width: 308px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 36px;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 36px;
  height: 100%;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  &:hover {
    background-color: #cacacb;
    cursor: pointer;
  }
`;

export const SearchInputWrapper = styled.div`
  position: absolute;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f5f5;
  width: 168px;
  height: 36px;
  border-radius: 18px;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 12px;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
  &:last-of-type {
    margin-left: -12px;
  }
`;

export const Bottom = styled.div`
  background-color: #f5f5f5;
  height: 60px;
`;
