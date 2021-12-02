import { Layout } from "../../components/layouts/Layout";
import { CardDetails } from "../../components/modules/CardDetails";

export async function getStaticPaths() {
  const res = await fetch("https://reqres.in/api/users?page=1/data");
  const data = await res.json();

  const paths = data.data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(users: any) {
  const id = users.params.id;
  const res = await fetch("https://reqres.in/api/users/" + id);
  const data = await res.json();
  const userData = data.data;

  return {
    props: { dataUser: userData },
  };
}

const Details = ({ dataUser }: any) => {
  return (
    <Layout>
      <CardDetails
        imageUrl={dataUser.avatar}
        name={dataUser.first_name + ` ` + dataUser.last_name}
        email={dataUser.email}
        twitter={"twitter.com"}
        linkedin={"google.com"}
      />
    </Layout>
  );
};

export default Details;
