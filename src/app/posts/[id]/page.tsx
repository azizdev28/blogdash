import React from "react";
import axios from "axios";
async function getDetailDetailesPage(id: string) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}
const DetailesPage = async ({ params }: { params: { id: string } }) => {
  const data = await getDetailDetailesPage(params.id);
  return (
    <div>
      <h2>{data.id}</h2>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default DetailesPage;
