import React from "react";
import Nav from "../header/nav";
import Footer from "../footer/footer";
import Table from "./table";
import Pie from "./pie";
import Line from "../components/line";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const home = () => {
  return (
    <div className="row" >
      <div className="col col-md-3 ">
        <Nav />
      </div>
      <div className="col">
        <div className="counter section-sm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3 col-3">
                <div className="counters-item">
                  <span>$50k+</span>
                  <p>Sunny Coin Served</p>
                </div>
              </div>
              <div className="col-md-3 col-3">
                <div className="counters-item">
                  <span>10M KW+</span>
                  <p>Energy provided</p>
                </div>
              </div>
              <div className="col-md-3 col-3">
                <div className="counters-item">
                  <span>358</span>
                  <p>Active User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px",
          }}
        >
          <div
            style={{
              inlineSize: "90%",
            }}
          >
            <Tabs
              defaultActiveKey="Users"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Users" title="Users" style={{ padding: "10px" }}>
                <Table />
              </Tab>
              <Tab
                eventKey="Regions"
                title="Regions"
                style={{ padding: "10px" }}
              >
                <Pie />
              </Tab>
              <Tab
                eventKey="Evolution"
                title="Evolution"
                style={{ padding: "10px" }}
              >
                <Line />
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default home;
