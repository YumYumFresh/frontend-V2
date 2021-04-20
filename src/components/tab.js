import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const tab = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <h1> we made it to tab one</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
         <h1>second tab</h1>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <h1> third tab</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default tab;
