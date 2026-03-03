import { http } from "../../../shared/api/http";
import type { UserDTO } from "../model/user.dto";
import { mapUser } from "../model/user.mapper";

// export async function fetchUser(signal?: AbortSignal): Promise<User[]> {
//   const res = await fetch(`${ENV.API_BASE_URL}/users`, { signal });

//   if (!res.ok) {
//     throw new Error("Failed to fetch users");
//   }

//   const data: { users: UserDTO[] } = await res.json();

//   return data.users.map(mapUser);
// }

// with pagination

export async function fetchUserPagination(
  page: number,
  limit: number,
  signal?: AbortSignal,
) {
  const skip = (page - 1) * limit;
  const data = await http<{ users: UserDTO[]; total: number }>(
    `/users?limit=${limit}&skip=${skip}`,
    { signal },
  );
  return {
    users: data.users.map(mapUser),
    total: data.total,
  };
}
