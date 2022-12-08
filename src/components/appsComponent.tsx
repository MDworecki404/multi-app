import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import weatherApp from "../assets/weatherapp.svg";
import todoApp from "../assets/todoapp.svg";

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
    &:nth-child(1) {
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25% 1fr));
  grid-template-rows: repeat(auto-fit, minmax(25%, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  .item {
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
  .div1 {
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
  .div2 {
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
