import { NextPage } from "next";
import { useState } from "react";
import Input from "../../components/input";
import Layout from "../../components/layout";
import Button from "../../components/button";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <Layout>
      <article className="login__container">
        <section>
          <h2>Login</h2>
          <div>Welcome back, Enter your email address and password</div>
          <Input
            state={email}
            setState={setEmail}
            label="Email Address"
            placeholder="E.g. johnsmith@email.com"
          />
          <Input
            state={password}
            setState={setPassword}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="reset__password">
            <div></div>
            <div>Reset password</div>
          </div>

          <Button title="Sign in" onClick={() => router.push("/dashboard")} />
        </section>
      </article>
    </Layout>
  );
};

export default Login;
