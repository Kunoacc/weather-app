<template>
  <div>
    <transition name="fade">
      <img
        src="../assets/img/spinner.svg"
        height="150"
        alt
        srcset
        v-if="error == ''"
      >
      <h2 v-if="error !== ''">{{error}}</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: ["error"]
};
</script>


<style scoped>
div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#09c6f9),
    to(#045de9)
  );
  background-image: linear-gradient(90deg, #09c6f9, #045de9);
}
</style>
