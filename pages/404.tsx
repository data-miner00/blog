import Layout from "../components/Layout";
import Header from "../components/Header";

function NotFound(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="py-[200px] max-w-[1192px] mx-auto">
        <p
          className="text-8xl font-bold text-transparent uppercase py-10"
          style={{ WebkitTextStroke: "1px #ddd" }}
        >
          404 Not Found
        </p>
        <p
          className="text-6xl font-bold text-transparent uppercase"
          style={{ WebkitTextStroke: "1px #ddd" }}
        >
          The said page could not be found.
        </p>
      </div>
    </div>
  );
}

export default NotFound;

NotFound.getLayout = function getLayout(page: React.ReactChild) {
  return <Layout>{page}</Layout>;
};
