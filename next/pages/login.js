import React, { useState } from "react";
import routeTo from "../utils/routeTo";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import auth from "../utils/auth";

const Login = ({ user, ...props }) => {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [online, setOnline] = useState(true);

  return (
    <Layout title="Login" user={user} online={online}>
      <LoginForm
        error={error}
        submitting={submitting}
        onSubmit={e => {
          e.preventDefault();

          setSubmitting(true);

          const email = e.target.elements.email.value;
          const password = e.target.elements.password.value;

          auth
            .login(email, password)
            .then(response => setTimeout(() => routeTo("/"), 500))
            .catch(error => {
              setError(error.response.data.message);
              setSubmitting(false);
            });
        }}
      />
    </Layout>
  );
};

export default Login;
