<template lang="pug">
  .container
    .columns
      .column
        .notification.is-danger
          slot(name="body") Something is wrong
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
    text-align: center;
    display: flex;
    align-items: center;
  }
</style>
