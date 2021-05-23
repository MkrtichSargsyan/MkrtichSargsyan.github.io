export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .container {
          margin: 0 auto;
          padding: 50px 0;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: "Source Sans Pro", sans-serif;
          
        }

        ul {
          list-style-type: none;
        }

          section {
            padding: 0 50px;
          }

        @media screen and (max-width: 768px) {
          section {
            padding: 50px 0;
          }
        }
        @media screen and (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
