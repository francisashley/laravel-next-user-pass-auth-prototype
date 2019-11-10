import Layout from "../components/Layout";

const Profile = ({ user, ...props }) => {
  return (
    <Layout title="Profile" user={user}>
      <h1 className="title">Profile page</h1>

      <p className="description">This page is only visible because you are logged in.</p>

      <style jsx>{`
        * {
          text-align: center;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
