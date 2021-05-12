import Home from "../components/Home";
import Layout from "../components/layout/Layout";

export default function HomePage({ users }) {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typecode.com/users");
  const user = await res.json();

  return {
    props: {
      users,
    },
  };
};
