<template>
  <p>Example Page</p>
  <ol>
    <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
  </ol>
</template>

<script lang="ts" setup>
import UserRepositoryImpl from "~/domain/repositories/users/user.repository.impl";
import UserService from "~/domain/services/user.service";
import { type UserEntity } from "~/models/user.entity";

const users = ref<UserEntity[] | null>([]);

const userService = new UserService(new UserRepositoryImpl());

onMounted(async () => {
  users.value = await userService.fetchUser();
});
</script>
