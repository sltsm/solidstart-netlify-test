import { cache, createAsync } from "@solidjs/router";

const getData = async () => {
  "use server";
  console.log("Am I executed on the Server?");
  return "I'm from far away...";
};

export default function Home() {
  const data = createAsync(() => getData());

  return (
    <main class="">
      <h1 class="">Hello world!</h1>
      <p>This is Content from the Server: {data()}</p>
    </main>
  );
}
