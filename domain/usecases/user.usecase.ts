import type { UserEntity } from "~/models/user.entity";
import type { UserRepository } from "~/domain/repositories/users/user.repository";

class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.getUsers();
  }
}

export default UserUseCase;
