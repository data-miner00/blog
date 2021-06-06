import Header from "./Header";

export default function Skeleton() {
  return (
    <div className="loading">
      <Header />
      <div className="loading__img"></div>
      <div className="loading__title"></div>
      <div className="loading__title2"></div>
      <div className="loading__user"></div>
      <div className="loading__content"></div>
      <div className="loading__content2"></div>
      <div className="loading__content3"></div>

      <style jsx>{`
        .loading {
          padding: 100px 20%;
          height: 120vh;
        }
        .loading__img {
          width: 100%;
          height: 300px;
          background: gray;
        }
        .loading__title {
          height: 40px;
          width: 70%;
          background: gray;
          margin-top: 20px;
        }
        .loading__title2 {
          height: 40px;
          width: 50%;
          background: gray;
          margin-top: 20px;
        }
        .loading__user {
          height: 50px;
          width: 100%;
          background: gray;
          margin-top: 40px;
        }
        .loading__content {
          height: 20px;
          width: 70%;
          background: gray;
          margin-top: 40px;
        }
        .loading__content2 {
          height: 20px;
          width: 50%;
          background: gray;
          margin-top: 25px;
        }
        .loading__content3 {
          height: 20px;
          width: 100%;
          background: gray;
          margin-top: 25px;
        }
      `}</style>
    </div>
  );
}
