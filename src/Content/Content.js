import React, { Component } from "react";
import Header from "./Header";
import { database } from "../DataBase/Dataglass";

export default class Content extends Component {
  state = {
    ma: "v1",
  };
  handleChangeGlass = (maKinh) => {
    this.setState({
      ma: maKinh,
    });
  };
  renderListGlass = () => {
    return database.map((item, index) => {
      return (
        <div
          className="col-4"
          key={index}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            this.handleChangeGlass(item.maKinh);
          }}
        >
          <img
            src={item.hinhAnh}
            alt=""
            style={{
              display: "inline-block",
              width: "110px",
              height: "50px",
              objectFit: "contain",
              margin: "10px 0",
            }}
          />
        </div>
      );
    });
  };

  render() {
    let { ma } = this.state;
    let imgPath = `./glassesImage/${ma}.png`;
    return (
      <div>
        <Header />
        <div
          className="row"
          style={{
            margin: "0 auto",
          }}
        >
          <div className="col-6">
            <img
              src="./glassesImage/model.jpg"
              alt=""
              style={{
                width: "240px",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="col-6"
            style={{
              position: "relative",
            }}
          >
            <img
              src="./glassesImage/model.jpg"
              alt=""
              style={{
                position: "absolute",
                top: "0",
                left: "calc(50% - 120px)",
                width: "240px",
                objectFit: "cover",
              }}
            />
            <img
              src={imgPath}
              alt=""
              style={{
                position: "absolute",
                top: "69px",
                left: "calc(50% - 120px + 55px)",
                width: "130px",
                height: "50px",
                objectFit: "contain",
                opacity: "0.85",
              }}
            />
          </div>
        </div>
        <div
          className="row"
          style={{
            background: "#fff",
            marginTop: "25px",
          }}
        >
          {this.renderListGlass()}
        </div>
      </div>
    );
  }
}
