<template>
  <div class="register">
    <h1>Register</h1>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
};
</script>

<style scoped>
.register {
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
form div {
  margin-bottom: 15px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
