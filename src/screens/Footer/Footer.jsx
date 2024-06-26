import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <footer className="footer py-4">
        <Container>
          <Row>
            <Col lg={6} sm={12} className="order-lg-1 order-sm-1 py-5">
              <div>
                <svg
                  width="239"
                  height="37"
                  viewBox="0 0 239 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3404 0.888916H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888916ZM22.8257 5.46214L33.0937 22.009H13.101L22.8257 5.46214ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
                    fill="white"
                  />
                  <path
                    d="M65.0254 36.5149H60.3655L70.7723 12.0068H75.6577L86.2843 36.5149H81.3988L78.6295 29.8256H70.4601L72.0211 25.8884H76.9528L73.1023 16.6841L65.0254 36.5149Z"
                    fill="white"
                  />
                  <path
                    d="M102.733 12.0068V15.921H95.7025V36.5149H91.1639V15.921H84.1335V12.0068H102.733Z"
                    fill="white"
                  />
                  <path
                    d="M113.012 36.5149V12.0068H122.61C130.704 12.0068 134.761 15.8612 134.78 23.57C134.78 32.1922 130.723 36.5014 122.61 36.4976L113.012 36.5149ZM122.61 32.5719C127.698 32.5719 130.24 29.577 130.236 23.5873C130.236 18.4764 127.694 15.921 122.61 15.921H117.557V32.5719H122.61Z"
                    fill="white"
                  />
                  <path
                    d="M143.175 12.0068V36.5149H138.636V12.0068H143.175Z"
                    fill="white"
                  />
                  <path
                    d="M167.856 35.3818C165.497 36.3202 162.97 36.763 160.433 36.6826C151.784 36.6826 147.459 32.4274 147.459 23.9169C147.459 15.8651 151.859 11.8373 160.658 11.8334C163.11 11.7913 165.55 12.1969 167.856 13.0302V17.1409C165.689 16.2169 163.355 15.7504 160.999 15.7707C155.114 15.7707 152.171 18.4842 152.171 23.9111C152.171 29.7968 154.948 32.7377 160.502 32.7338C161.452 32.7175 162.397 32.5795 163.312 32.3233V25.2004H167.856V35.3818Z"
                    fill="white"
                  />
                  <path
                    d="M176.679 12.0068V36.5149H172.141V12.0068H176.679Z"
                    fill="white"
                  />
                  <path
                    d="M197.845 12.0068V15.921H190.821V36.5149H186.277V15.921H179.229V12.0068H197.845Z"
                    fill="white"
                  />
                  <path
                    d="M200.366 36.5149H195.706L206.113 12.0068H210.999L221.619 36.5149H216.74L213.918 29.8256H205.824L207.385 25.8884H212.323L208.466 16.6841L200.366 36.5149Z"
                    fill="white"
                  />
                  <path
                    d="M229.159 12.0068V32.5719H238.889V36.5149H224.614V12.0068H229.159Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="footer-text">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </div>
            </Col>
            <Col lg={3} sm={6} className="order-lg-2 order-sm-2 pt-5">
              <p className="technologies-title">Our Technologies</p>
              <ul
                className="footer-list list-group"
                style={{ listStyleType: "none", padding: 0 }}
              >
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </Col>
            <Col lg={3} sm={6} className="order-lg-3 order-sm-3 pt-5">
              <p className="services-title">Our Services</p>
              <ul
                className="footer-list list-group"
                style={{ listStyleType: "none", padding: 0 }}
              >
                <li>Social media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center py-2">
            <hr className="footer-hr" />
          </Row>
          <Row>
            <Col>
              <p className="text-center">Privacy Policy | Terms & Conditions</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
