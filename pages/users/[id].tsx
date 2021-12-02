interface Props {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}

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

  return {
    props: { dataUser: data.data },
  };
}

const Details = ({ dataUser }: any) => {
  return (
    <div>
      <p>This is details page</p>
      <p>{dataUser.first_name + ` ` + dataUser.last_name}</p>
    </div>
  );
};

export default Details;
