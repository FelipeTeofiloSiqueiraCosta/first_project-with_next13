import { CardUser } from "../components/CardUser";
import { User } from "../components/User";

export default function ListUser() {
  return (
    <div>
      <h3>Users</h3>
      <CardUser>
        {/* @ts-expect-error Server Component */}
        <User />
      </CardUser>
    </div>
  );
}
