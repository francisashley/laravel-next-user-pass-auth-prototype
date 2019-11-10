import Layout from "../components/Layout";
import Link from "next/link";

const Home = ({ user, ...props }) => {
  return (
    <Layout title="Home" user={user}>
      <h1 className="title">Home page</h1>

      {!user && (
        <p className="description">
          You are logged out. Would you like to{" "}
          <Link href="/login">
            <a>log in?</a>
          </Link>
        </p>
      )}

      {user && (
        <p className="description">
          You are logged in as <b>{user.name}</b>.
        </p>
      )}

      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
