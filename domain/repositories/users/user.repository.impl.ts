import UserApi from "~/domain/apiclient/userApi";
import type { UserRepository } from "./user.repository";
import type { UserEntity } from "~/models/user.entity";

class UserRepositoryImpl implements UserRepository {
  private userApi: UserApi;
  constructor() {
    this.userApi = new UserApi();
  }

  async getUsers(): Promise<UserEntity[]> {
    return this.userApi.getUsers();
  }
}

export default UserRepositoryImpl;
