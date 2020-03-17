import React, { Component } from "react";
import Head from "next/head";
import AOS from "aos";

class Index extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className="profile-wrapper">
        <Head>
          <title>personal website</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="img" data-aos="fade-down"></div>
        <div className="introduction" data-aos="fade-up">
          <p>Hello, I'm Khashayar</p>
          <p>Front-End Engineer</p>
          <p>MyEmail: khashayarmahg@gmail.com</p>
          <span className="links-wrapper">
            <a href="https://github.com/khashayarsw" target="_blank">
              <img src="/svg/github.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/khashayar-mahdavi-nejad-770b7b180/"
              target="_blank"
            >
              <img src="/svg/linkedin.svg" alt="" />
            </a>
          </span>
        </div>
        <style jsx global>{`
          #__next {
            text-align: center;
          }
          body {
            font-family: "Roboto Slab", serif;
            color: rgba(99, 110, 114, 0.9);
          }
        `}</style>
        <style jsx>{`
          .profile-wrapper {
            display: inline-block;
            margin: 50px auto 0 auto;
          }
          .img {
            width: 300px;
            height: 300px;
            margin: 0 auto;
            border-radius: 50%;
            background-size: cover;
            background-image: url(/imgs/khashayar.jpg);
          }
          .introduction {
            margin-top: 40px;
          }
          .links-wrapper {
            margin-top: 15px;
          }
          .links-wrapper a {
            display: inline-block;
          }
          .links-wrapper a:nth-of-type(1) {
            margin-right: 10px;
          }

          .links-wrapper img {
            width: 45px;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
