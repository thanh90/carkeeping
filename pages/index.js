import Head from 'next/head';

import Header from 'components/blocks/Header';
import Intro from 'components/blocks/Intro';
import Footer from 'components/blocks/footer';
import Specifications from 'components/blocks/Specifications';
import CompanyInfo from 'components/blocks/CompanyInfo';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>차집사 - 내 손안 차량 가계부</title>
        <link rel="icon" href="/carkeeping.png" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='author' content='차집사' />
      </Head>

      <div style={{width: '100%'}}>
        <div className='header'>
          <Header />
        </div>
        <Intro /> 
      </div>
 
      <section id='specs'>
      <Specifications />
      </section>

      <section id='company_info'>
      <CompanyInfo />
      </section>

      <footer id='contact'>
        <Footer />
      </footer>

      <style jsx>{`
        html{scroll-behavior:smooth}

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        section{
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .header{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 1;
          padding: 0 20%;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media screen and (max-width: 1000px){
          .header{
            display: none;
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Noto Sans KR, Roboto;
        }

        p {
          word-spacing: 0.05em;
        }

        * {
          box-sizing: border-box;
        }

        .slick-prev:before, .slick-next:before {
          display: none;
        }

        .slick-slide div {
          outline: none;
          // height: 100%;
        }

        .slick-track {
          display: flex !important;
        }
        
        .slick-slide {
          height: auto;
        }

        .MuiPaper-elevation1{
          box-shadow: 0 0 6px 0 rgba(211, 211, 211, 0.5);
        }
      `}</style>
    </div>
  )
}
