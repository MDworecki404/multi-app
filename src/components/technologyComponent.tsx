import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = "Technology";

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h2`
  width: 20%;
  text-align: center;
`;
const Menu = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 10rem;
  justify-content: right;
  margin-right: 10%;
  font-size: 20px;
  cursor: pointer;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(2) {
      background-color: ${blue};
      width: 8rem;
      text-align: center;
      height: 3rem;
      color: ${white};
      border-radius: 2rem;
      transition: all 0.2s linear;
      &:hover {
        color: #2f2e41;
      }
    }
    a {
      color: black;
      text-decoration: none;
      transition: all 0.2s linear;

      &:hover {
        color: ${blue};
      }
    }
  }
`;
const MainSection = styled.section`
  width: 93vw;
  height: 90vh;
  background-color: ${blue};
  border-top-right-radius: 90px;
  display: flex;

  img {
    right: -50%;
    transform: scale(0.8);
  }
`;
const MainArticle = styled.article`
  width: 50%;
  height: 100%;
  color: ${white};
  margin-left: 2.5%;
  margin-right: 2.5%;
  text-align: left;

  p {
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    height: 100%;
  }
`;

export class Technology extends react.Component {
  render() {
    return (
      <div>
        <Header>
          <Logo>MultiApp</Logo>
          <Menu>
            <MenuItems>
              <li>
                <a href="/app">Apps</a>
              </li>
              <li>Technology</li>
              <li>
                <a href="/">About</a>
              </li>
            </MenuItems>
          </Menu>
        </Header>
        <MainSection>
          <MainArticle>
            <p>{article}</p>
          </MainArticle>
          <img src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
