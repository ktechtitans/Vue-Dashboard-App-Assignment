<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  text-align: center;
  margin-bottom: 20px;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 10px;
}
nav ul li a {
  text-decoration: none;
  color: #007bff;
}
nav ul li a:hover {
  text-decoration: underline;
}
</style>
