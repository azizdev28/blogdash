import { PropType } from "@/interface";
import axios from "axios";
import Link from "next/link";
async function getUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, 5000)
  );
  return data;
}
const UsersPage = async () => {
  const data: PropType[] = await getUsers();
  return (
    <div>
      {data.map((c) => (
        <ul key={c.id}>
          <Link href={`/users/${c.id}`}>{c.name}</Link>
        </ul>
      ))}
    </div>
  );
};
export default UsersPage;
