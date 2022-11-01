import { useRouter } from "next/router";
import Button from "../../components/button";
import Card from "../../components/card";
import Layout from "../../components/layout";

export default function Dashboard() {
  const router = useRouter();

  return (
    <Layout navBarType="auth">
      <article className="dashboard__container">
        <section className="header">
          <div className="header__text">
            <h2>Dashboard</h2>
            <div>Here’s an overview of your details</div>
          </div>

          <div className="btn__wrapper">
            <Button
              className="px-4 h-full flex items-center justify-center"
              title="Create New Account"
              onClick={() => router.push("/dashboard/new")}
            />
          </div>
        </section>

        <section className="cards">
          <Card count="0" type="active" />
          <Card count="0" type="pending" />
          <Card count="0" type="failed" />
        </section>
      </article>
    </Layout>
  );
}
