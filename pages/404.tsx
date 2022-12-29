import Layout from "../components/Layout";
import Header from "../components/Header";

function NotFound(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="px-6 py-[150px] md:py-[200px] max-w-[1192px] mx-auto">
        <p className="text-lg md:text-2xl font-bold uppercase text-white">
          That's abit unfortunate
        </p>
        <p className="text-6xl md:text-8xl font-bold text-transparent uppercase">
          <span style={{ WebkitTextStroke: "1px #ddd" }}>404</span>{" "}
          <span className="text-white">Not</span>{" "}
          <span style={{ WebkitTextStroke: "1px #ddd" }}>Found</span>
        </p>
        <p className="text-2xl md:text-6xl font-bold text-transparent uppercase">
          <span style={{ WebkitTextStroke: "1px #ddd" }}>
            The requested page does
          </span>{" "}
          <span className="text-white">not</span>{" "}
          <span style={{ WebkitTextStroke: "1px #ddd" }}>exist.</span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;

NotFound.getLayout = function getLayout(page: React.ReactChild) {
  return <Layout>{page}</Layout>;
};
