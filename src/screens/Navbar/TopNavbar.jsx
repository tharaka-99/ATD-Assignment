import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

export default function TopNavbar() {
  return (
    <div>
      <Navbar
        key="lg"
        expand="lg"
        sticky="top"
        variant="dark"
        className="py-3"
        style={{
          backgroundSize: "0",
          backgroundColor: "#6B3CC9",
          color: "#fff",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <svg
              width="239"
              height="37"
              viewBox="0 0 239 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
                fill="white"
              />
              <path
                d="M65.0254 36.5149H60.3654L70.7723 12.0069H75.6577L86.2842 36.5149H81.3988L78.6294 29.8257H70.46L72.0211 25.8884H76.9528L73.1022 16.6841L65.0254 36.5149Z"
                fill="white"
              />
              <path
                d="M102.733 12.0069V15.921H95.7023V36.5149H91.1638V15.921H84.1334V12.0069H102.733Z"
                fill="white"
              />
              <path
                d="M113.012 36.5149V12.0069H122.61C130.704 12.0069 134.761 15.8612 134.78 23.57C134.78 32.1923 130.723 36.5015 122.61 36.4976L113.012 36.5149ZM122.61 32.5719C127.698 32.5719 130.24 29.5771 130.236 23.5873C130.236 18.4764 127.694 15.921 122.61 15.921H117.557V32.5719H122.61Z"
                fill="white"
              />
              <path
                d="M143.175 12.0069V36.5149H138.636V12.0069H143.175Z"
                fill="white"
              />
              <path
                d="M167.856 35.3818C165.497 36.3202 162.971 36.763 160.433 36.6826C151.784 36.6826 147.459 32.4274 147.459 23.9169C147.459 15.8651 151.859 11.8373 160.658 11.8334C163.111 11.7913 165.55 12.1969 167.856 13.0302V17.1409C165.69 16.2169 163.355 15.7504 161 15.7707C155.114 15.7707 152.171 18.4842 152.171 23.9111C152.171 29.7968 154.948 32.7377 160.502 32.7338C161.453 32.7175 162.397 32.5795 163.312 32.3233V25.2004H167.856V35.3818Z"
                fill="white"
              />
              <path
                d="M176.679 12.0069V36.5149H172.141V12.0069H176.679Z"
                fill="white"
              />
              <path
                d="M197.846 12.0069V15.921H190.821V36.5149H186.277V15.921H179.229V12.0069H197.846Z"
                fill="white"
              />
              <path
                d="M200.366 36.5149H195.706L206.113 12.0069H210.999L221.619 36.5149H216.74L213.918 29.8257H205.824L207.385 25.8884H212.323L208.466 16.6841L200.366 36.5149Z"
                fill="white"
              />
              <path
                d="M229.158 12.0069V32.5719H238.889V36.5149H224.614V12.0069H229.158Z"
                fill="white"
              />
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="#SERVICES"
                  style={{ fontWeight: "500", fontSize: "14px" }}
                >
                  SERVICES
                </Nav.Link>
                <Nav.Link
                  href="#ABOUT_US"
                  style={{ fontWeight: "500", fontSize: "14px" }}
                >
                  ABOUT US
                </Nav.Link>
                <Nav.Link
                  href="#CONTACT_US"
                  style={{ fontWeight: "500", fontSize: "14px" }}
                >
                  CONTACT US
                </Nav.Link>
                <Nav.Link
                  href="#CAREERS"
                  style={{ fontWeight: "500", fontSize: "14px" }}
                >
                  CAREERS
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
