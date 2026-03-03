import type { UserDTO } from "./user.dto";
import type { User } from "./user.model";

export function mapUser(dto: UserDTO): User {
  return {
    id: dto.id,
    fullName: `${dto.firstName} ${dto.lastName}`,
    email: dto.email,
  };
}
