<template>
  <div class="navbar">
    <li>
      <ul>
        <p><a href="/about">About</a></p>
      </ul>
      <ul>
        <p><a href="/home">Home</a></p>
      </ul>
      <ul>
        <p><a href="/what">What</a></p>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {},
  methods: {},
};
</script>

<style  lang="scss" scoped>
li {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Cocogoose";
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

  a {
    text-decoration: none;
    color: unset;
  }

  p {
    margin: 0;
  }

  &:hover {
    background-size: 100% 100%;

    p {
      color: #242f65;
    }
  }
}
</style>
