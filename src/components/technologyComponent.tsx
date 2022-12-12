import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import Reacticon from "../assets/React-icon.png";
import Typescript from "../assets/Typescript.png";

const blue: string = `#335efc`;
const white: string = `#ffffff`;

const Header = styled.header`
  @media (min-width: 928px) {
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 928px) {
    width: 100vw;
    height: 10vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Logo = styled.h2`
  @media (min-width: 928px) {
    width: 20%;
    text-align: center;
  }
  @media (max-width: 928px) {
    width: 100%;
    text-align: center;
  } ;
`;
const Menu = styled.div`
  @media (min-width: 928px) {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MenuItems = styled.ul`
  @media (min-width: 928px) {
    list-style: none;
    display: flex;
    gap: 8vw;
    justify-content: right;
    margin-right: 10%;
    font-size: 1.1vw;
  }
  @media (max-width: 928px) {
    list-style: none;
    display: flex;
    gap: 8vw;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
  }

  li {
    @media (min-width: 928px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      gap: 8vw;
      text-align: center;
      height: 3rem;
      cursor: pointer;
      &:nth-child(3) {
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
    @media (max-width: 928px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15vw;
      gap: 0vw;
      text-align: center;
      height: 3vh;
      cursor: pointer;
      &:nth-child(2) {
        background-color: ${blue};
        width: 20vw;
        text-align: center;
        height: 5vh;
        color: ${white};
        border-radius: 2rem;
        transition: all 0.2s linear;
      }
      a {
        color: black;
        text-decoration: none;
        transition: all 0.2s linear;
      }
    }
  }
`;
const MainSection = styled.section`
  @media (min-width: 928px) {
    width: 93vw;
    height: 90vh;
    background-color: ${blue};
    border-top-right-radius: 90px;
    display: flex;
    flex-basis: fit-content;
    overflow: hidden;
  }
  @media (max-width: 928px) {
    width: 100vw;
    height: 90vh;
    background-color: ${blue};
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .svgBG {
    @media (max-width: 928px) {
      display: none;
    }
  }

  img {
    @media (min-width: 928px) {
      right: -50%;
      transform: scale(0.8);
    }
    @media (max-width: 928px) {
    }
  }
`;
const MainArticle = styled.article`
  @media (min-width: 928px) {
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
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 90%;
    margin: auto;
    color: ${white};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .React {
      width: 100%;
      display: flex;
      align-items: center;
      height: 50%;
      gap: 2vh;
      flex-direction: column;

      img {
        width: 25vw;
      }
      .React-Article {
        width: 50%;
        font-size: 3vw;
      }
    }
    .Typescript {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 5vh;
      height: 50%;
      flex-direction: column;
      .Typescript-Article {
        width: 50%;
        font-size: 3vw;
      }

      img {
        width: 25vw;
      }
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
              <img className="ReactIcon" src={Reacticon}></img>
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
              <img className="TypescriptIcon" src={Typescript}></img>
            </section>
          </MainArticle>
          <img className="svgBG" src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
