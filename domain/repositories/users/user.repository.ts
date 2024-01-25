import UserApi from "~/domain/apiclient/userApi";
import type { UserEntity } from "~/models/user.entity";

export interface UserRepository {
  getUsers(): Promise<UserEntity[]>;
}

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
