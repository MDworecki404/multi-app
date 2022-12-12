import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import weatherApp from "../assets/weatherapp.svg";
import todoApp from "../assets/todoapp.svg";

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
  }
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
      width: 8vw;
      gap: 0vw;
      text-align: center;
      height: 3rem;
      cursor: pointer;
      &:nth-child(1) {
        background-color: ${blue};
        width: 15vw;
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

  img {
    @media (min-width: 928px) {
      flex-basis: fit-content;
      right: -50%;
      transform: scale(80%);
    }
    @media (max-width: 928px) {
      display: none;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25% 1fr));
    grid-template-rows: repeat(auto-fit, minmax(25%, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
  @media (max-width: 928px) {
    width: 100%;
    height: 100%;
    color: ${white};
    margin-left: 2.5%;
    margin-right: 2.5%;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25% 1fr));
    grid-template-rows: repeat(auto-fit, minmax(25%, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
  .item {
    @media (min-width: 928px) {
      background-color: ${white};
      margin-top: 10%;
      margin-bottom: 10%;
      outline: 5px solid #cdcdcd;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.2s linear;
      color: #2f2e41;

      &:hover {
        transform: translateY(-5px);
        color: #6c63ff;
      }
    }
    @media (max-width: 928px) {
      background-color: ${white};
      margin-top: 10%;
      margin-bottom: 10%;
      outline: 5px solid #cdcdcd;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.2s linear;
      color: #2f2e41;
    }
  }

  .div1 {
    @media (min-width: 928px) {
      grid-area: 1 / 1 / 2 / 2;
      background-image: url(${weatherApp});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 75% 75%;
      position: relative;

      .appName {
        width: 100%;
        text-align: center;
        height: 10%;
        font-size: 18px;
        position: absolute;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        bottom: 0;
        background-color: #cdcdcd;
        line-height: 200%;
      }
    }
    @media (max-width: 928px) {
      grid-area: 1 / 1 / 2 / 2;
      background-image: url(${weatherApp});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 75% 75%;
      position: relative;

      .appName {
        width: 100%;
        text-align: center;
        height: 10%;
        font-size: 3.5vw;
        position: absolute;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        bottom: 0;
        background-color: #cdcdcd;
        line-height: 200%;
      }
    }
  }
  .div2 {
    @media (min-width: 928px) {
      grid-area: 1 / 2 / 2 / 3;
      background-image: url(${todoApp});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 75% 75%;
      position: relative;

      .appName {
        width: 100%;
        text-align: center;
        height: 10%;
        font-size: 18px;
        position: absolute;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        bottom: 0;
        background-color: #cdcdcd;
        line-height: 200%;
      }
    }
    @media (max-width: 928px) {
      grid-area: 1 / 2 / 2 / 3;
      background-image: url(${todoApp});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 75% 75%;
      position: relative;

      .appName {
        width: 100%;
        text-align: center;
        height: 10%;
        font-size: 3.5vw;
        position: absolute;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        bottom: 0;
        background-color: #cdcdcd;
        line-height: 200%;
      }
    }
  }
  .div3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
`;
export class Apps extends react.Component {
  weatherHref = () => {
    window.location.href = "/currentweatherapp";
  };
  todoHref = () => {
    window.location.href = "/todoapp";
  };
  render() {
    return (
      <div>
        <Header>
          <Logo>MultiApp</Logo>
          <Menu>
            <MenuItems>
              <li>Apps</li>
              <li>
                <a href="/technology">Technology</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </MenuItems>
          </Menu>
        </Header>
        <MainSection>
          <MainArticle>
            <div className="item div1" onClick={this.weatherHref}>
              <div className="appName">Weather App</div>
            </div>

            <div className="item div2" onClick={this.todoHref}>
              <div className="appName">ToDo App</div>
            </div>
            <div className="item div3"></div>
            <div className="item div4"></div>
          </MainArticle>
          <img src={appsSVG}></img>
        </MainSection>
      </div>
    );
  }
}
