<template>
  <div class="whapp">
    <a href="" class="whaa">
      <img src="../../assets/navigator/wapp.png" alt="whaa" />
    </a>
    <a href="" class="desc">
      <img src="../../assets/navigator/desc.png" alt="whaa" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.whapp {
  display: none;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
}
@media (min-width: 768px) {
  .whapp {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 0 1.198vw;
  }
  .whaa {
    width: 3.385vw;
  }
  .desc {
    width: 6.458vw;
  }
}
</style>