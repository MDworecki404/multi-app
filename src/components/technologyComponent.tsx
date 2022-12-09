import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import Reacticon from "../assets/React-icon.png";
import Typescript from "../assets/Typescript.png";

const blue: string = `#335efc`;
const white: string = `#ffffff`;

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
    width: 8rem;
    text-align: center;
    height: 3rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .React {
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    height: 50%;
    position: relative;
    top: 0;
    left: 10vw;

    img {
      width: 15vw;
      left: -13.5vw;
      position: absolute;
    }
    .React-Article {
      width: 50%;
      font-size: 1vw;
    }
  }
  .Typescript {
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    height: 50%;
    position: relative;
    right: -10vw;
    .Typescript-Article {
      width: 50%;
      font-size: 1vw;
    }

    img {
      width: 12vw;
      position: absolute;
      left: 20vw;
    }
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
            <section className="React">
              <img src={Reacticon}></img>
              <div className="React-Article">
                React is a JavaScript library for building user interfaces. It
                uses a virtual DOM to efficiently update and render components,
                and has a declarative approach to coding. React also has a rich
                ecosystem of tools and libraries.
              </div>
            </section>
            <section className="Typescript">
              <div className="Typescript-Article">
                TypeScript is a programming language that is a superset of
                JavaScript. It adds static typing and type inference to
                JavaScript, and can be used with popular JavaScript libraries
                and frameworks. This can help improve the reliability and
                maintainability of code.
              </div>
              <img src={Typescript}></img>
            </section>
          </MainArticle>
          <img src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
