<template>
  <div>
    <p>Example Page</p>

    <div v-if="isLoading">Loading...</div>

    <div v-if="error">Error: {{ error.message }}</div>

    <ol v-if="users && !isLoading && !error">
      <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import UserRepositoryImpl from "~/domain/repositories/users/user.repository";
import UserService from "~/domain/services/user.service";
import { useQuery } from "@tanstack/vue-query";

const userService = new UserService(new UserRepositoryImpl());

// Define the function to fetch user data
const fetchUsers = async () => {
  const response = await userService.fetchUser();
  return response;
};

// Use useQuery to fetch data
const {
  data: users,
  error,
  isLoading,
} = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
</script>
