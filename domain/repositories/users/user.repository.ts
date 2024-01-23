import type { UserEntity } from "~/models/user.entity";

export interface UserRepository {
  getUsers(): Promise<UserEntity[]>;
}
