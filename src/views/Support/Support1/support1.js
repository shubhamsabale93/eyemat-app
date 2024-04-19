import React, {useState} from "react";
import Navbar from "../../../components/Navbar/Navbar.js";
import SimpleForm from "../Simpleform.js";
import "./support1.css";


export default function Support1() {
  const [showForm, setShowForm] = useState(false);

  const handleFormClick = () => {
    setShowForm(!showForm); // Toggle the state
  };
  return (
    <div>
      <Navbar />
      <div className="cont">
        <h1>Support</h1>
        <a href="https://example.com" className="Home1">
          HOME/
        </a>
        <h6 style={{ marginTop: "80px", marginLeft: "0px" }}>SUPPORT</h6>
      </div>

      <div className="cont1" id="next">
        <h1>
          PLEASE TELL US WHAT YOU NEED BY CLICKING THE CORRESPONDING SUPPORT
          BUTTON
        </h1>
      </div>
      <div className="cont1" id="next2">
        <p>
          Or you may contact us at 18002703060and our team of highly skilled
          professionals will be glad to assist you.
        </p>
      </div>
      <div className="container_1">
        <div className="row">
          <div className="col-md-4">
            <div className="card" id="box1">
              <div className="card-body">
                <button
                  onClick={handleFormClick}
                  style={{ width: "85px", height: "75px" }}
                >
                  <img src="/images/icon1.png" alt=" " className="smallImage" />
                </button>
                <b>Repair Request</b>
              </div>
            </div>
            {showForm && <SimpleForm />}
          </div>
          <div className="col-md-4">
            <div className="card" id="box2">
              <div className="card-body">
                <a href="https://example.com">
                  <img src="/images/logo1.jpg" alt=" " className="smallImage" />
                </a>

                <a href="https://example.com" className="text">
                  <b>Return For Credit</b>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" id="box3">
              <div className="card-body">
                <a href="https://example.com">
                  <img src="/images/icon3.jpg" alt=" " className="smallImage" />
                </a>

                <a href="https://example.com" className="text">
                  <b>Request For Advance Replacement</b>
                </a>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
