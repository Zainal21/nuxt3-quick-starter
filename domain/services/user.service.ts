import UserUseCase from "../usecases/user.usecase";
import type { UserRepository } from "../repositories/users/user.repository";
import type { UserEntity } from "~/models/user.entity";

class UserService {
  private userUseCase: UserUseCase;
  constructor(userRepository: UserRepository) {
    this.userUseCase = new UserUseCase(userRepository);
  }

  async fetchUser(): Promise<UserEntity[]> {
    return this.userUseCase.execute();
  }
}

export default UserService;
