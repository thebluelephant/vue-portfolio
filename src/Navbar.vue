<template>
  <div class="navbar">
    <li>
      <ul>
        <router-link to="/home"><p>Home</p></router-link>
      </ul>
      <ul>
        <router-link to="/about"> <p>About me</p> </router-link>
      </ul>
      <ul>
        <router-link to="/projects"> <p>Projects</p> </router-link>
      </ul>
      <ul>
        <router-link to="/skills"><p>Skills</p></router-link>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Cocogoose";

  @-moz-document url-prefix() {
    height: 100%;
  }
}
ul {
  cursor: pointer;
  color: rgb(247, 232, 184);
  padding: 5px 10px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.2s ease-in;

  //Firefox
  @-moz-document url-prefix() {
    display: flex;
    justify-content: center;
    width: 90px;
    height: 25px;
  }

  &--invisible {
    display: none;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #f7e8b8;
  }
  &:hover {
    background-size: 100% 100%;

    p {
      color: #242f65;
    }

    svg {
      fill: #242f65;
    }
  }
}
</style>
