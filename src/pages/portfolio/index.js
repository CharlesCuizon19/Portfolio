import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio1,dataportfolio2, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header" style={{ marginBottom: "100px" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio1.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
          <div> <h3>ManPro Vehicle Tracking System</h3> <br /> <br />
            A fleet management dashboard for tracking vehicle status in real time. It includes live maps, activity and incident reports, and easy access to features like routes, drivers, and geofences—ideal for improving logistics efficiency and oversight.
          </div>
          <br/>
          <div>
            <h3>Tools</h3><br/>
            <p>
              Tailwind CSS, React.js, Laravel, MySQL
            </p>
          </div>
        </div>
      </Container>
      <Container className="About-header">
        <div className="mb-5 po_items_ho">
          {dataportfolio2.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
              </div>
            );
          })}
          <div> <h3>Flexperience
            <br/>
            (Thesis project)</h3> <br /> <br />
            A web-based platform that helps users find fitness gyms, parks, and outdoor workout spots in Davao City. It features a map-based interface with user ratings, reviews, and membership details. The platform supports users in achieving their fitness goals by offering access to gym facilities, personal trainer bookings, and detailed information on nearby exercise locations—ideal for both locals and newcomers passionate about fitness.
          </div>
          
        </div>
      </Container>
    </HelmetProvider>
  );
};
