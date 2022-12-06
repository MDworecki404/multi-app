import react from "react";
import styled from "styled-components";
import appsSVG from "../assets/apps.svg";
import gsap from "gsap";
import weatherApp from "../assets/weatherapp.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = `Weather app`;
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
    &:nth-child(3) {
      width: 8rem;
      text-align: center;
      height: 3rem;
      border-radius: 2rem;
      &:hover {
        color: ${blue};
      }
    }
    a {
      color: black;
      text-decoration: none;
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
  flex-basis: fit-content;
  overflow: hidden;

  img {
    flex-basis: fit-content;
    right: -60%;
    transform: scale(50%);
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
  grid-template-columns: 80%;
  grid-template-rows: 15% 15% 70%;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 2rem;
    grid-row-start: span 1;
    border: none;
    background: none;
    color: ${white};
    border-bottom: 1px solid #cccccc;
    font-size: 20px;
    overflow: visible;
    transition: all 0.3s linear;

    &:focus {
      outline: 0;
      border: 0;
      border-bottom: 1px solid #cccccc;
    }

    &::placeholder {
      transition: all 0.2s linear;
      color: white;
    }
    &:focus {
      &::placeholder {
        transform: translateY(-60%);
        opacity: 0;
      }
    }
  }
  button {
    grid-row-start: span 1;
    color: ${white};
    font-size: 16px;
    width: 30%;
    height: 40%;
    margin: auto;
    border: 0;
    outline: 0;
    padding: 0;
    background: #2f2e41;
    cursor: pointer;
  }
`;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export class CurrentWeatherApp extends react.Component {
  state = {
    temp: "",
  };

  showWeather = () => {
    const cityName = document.querySelector(".CityQuery") as HTMLInputElement;
    const cityValue = cityName.value;
    fetch(
      `api.openweathermap.org/data/2.5/forecast/daily?q=${cityValue}&cnt=4&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({}));
  };
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
            <input className="CityQuery" type="text" placeholder="City"></input>
            <button>Check weather</button>
            <div className="results"></div>
          </MainArticle>
          <img className="appSVG" src={weatherApp}></img>
        </MainSection>
      </div>
    );
  }
}
