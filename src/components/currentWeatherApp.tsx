import react from "react";
import styled from "styled-components";
import weatherApp from "../assets/weatherapp.svg";

const blue: string = `#335efc`;
const white: string = `#ffffff`;
const article: string = `Weather app`;
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
      width: 8rem;
      gap: 8vw;
      text-align: center;
      height: 3rem;
      cursor: pointer;
      a {
        color: black;
        text-decoration: none;
        transition: all 0.2s linear;
        &:hover {
          color: ${blue};
        }
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
    right: -50%;
    width: 40vw;
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
    .results {
      grid-row-start: span 3;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-template-rows: 100%;
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      align-items: top;
      justify-content: center;
      color: black;

      .Weather {
        width: 100%;
        height: 20%;
        background-color: white;
        outline: 5px solid #2f2e41;
        position: relative;
        background-size: repeat;
        p {
          width: 100%;
          height: 100%;
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
          font-size: 20px;
        }
      }
      .Day {
        position: absolute;
        color: black;
        top: 0;
        font-weight: bold;
        text-align: center;
        width: 100%;
      }

      .Weather1 {
        grid-row-start: span 1;
      }
      .Weather2 {
        grid-row-start: span 1;
      }
      .Weather3 {
        grid-row-start: span 1;
      }
    }
  }
  @media (max-width: 928px) {
    width: 100%;
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
      font-size: 3vw;
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
      font-size: 3vw;
      width: 30%;
      height: 40%;
      margin: auto;
      border: 0;
      outline: 0;
      padding: 0;
      background: #2f2e41;
      cursor: pointer;
    }
    .results {
      grid-row-start: span 3;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-template-rows: 100%;
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      align-items: top;
      justify-content: center;
      color: black;

      .Weather {
        width: 100%;
        height: 20%;
        background-color: white;
        outline: 5px solid #2f2e41;
        position: relative;
        background-size: repeat;
        p {
          width: 100%;
          height: 100%;
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
          font-size: 4vw;
        }
      }
      .Day {
        position: absolute;
        color: black;
        top: 0;
        font-weight: bold;
        text-align: center;
        width: 100%;
      }

      .Weather1 {
        grid-row-start: span 1;
      }
      .Weather2 {
        grid-row-start: span 1;
      }
      .Weather3 {
        grid-row-start: span 1;
      }
    }
  }
`;

type apiData = {
  list: {
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
  }[];
};
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export class CurrentWeatherApp extends react.Component {
  state = {
    tempNow: "",
    skyNow: "",
    iconNow: "",
    temp24: "",
    sky24: "",
    temp48: "",
    sky48: "",
    fail: "",
  };

  showWeather = () => {
    const cityName = document.querySelector(".CityQuery") as HTMLInputElement;
    const cityValue = cityName.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&cnt=100&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data: apiData) =>
        this.setState({
          tempNow: `${Math.round(data.list[0].main.temp)}°C`,
          skyNow: data.list[0].weather[0].main,
          temp24: `${Math.round(data.list[7].main.temp)}°C`,
          sky24: data.list[7].weather[0].main,
          temp48: `${Math.round(data.list[15].main.temp)}°C`,
          sky48: data.list[15].weather[0].main,
          fail: ``,
        })
      )
      .catch((err) => {
        this.setState({
          tempNow: "City is not specified",
          skyNow: "",
          temp24: "City is not specified",
          sky24: "",
          temp48: "City is not specified",
          sky48: "",
          fail: `${err}`,
        });
      });
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
            <button onClick={this.showWeather}>Check weather</button>
            <div className="results">
              <div className="Weather Weather1">
                <div className="Day">Today</div>
                <p>
                  {this.state.tempNow}
                  <br></br>
                  {this.state.skyNow}
                </p>
              </div>
              <div className="Weather Weather2">
                <div className="Day">Tomorrow</div>
                <p>
                  {this.state.temp24}
                  <br></br>
                  {this.state.sky24}
                </p>
              </div>
              <div className="Weather Weather3">
                <div className="Day">Day After Tomorrow</div>
                <p>
                  {this.state.temp48}
                  <br></br>
                  {this.state.sky48}
                </p>
              </div>
            </div>
          </MainArticle>
          <img className="appSVG" src={weatherApp}></img>
        </MainSection>
      </div>
    );
  }
}
