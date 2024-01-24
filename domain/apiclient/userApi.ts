class UserApi {
  async getUsers() {
    const api = useApi();
    const response = await api.get("/users");
    return response.data;
  }
}

export default UserApi;
