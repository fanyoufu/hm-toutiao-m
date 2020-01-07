<template>
  <div id="app">
    <van-button type="primary">按钮</van-button>

  </div>
</template>
<script>
import request from './utils/request'
export default {
  created() {
    request.get('/app/v1_0/channels').then(res => {
      console.log(res)
    })
  }
}
</script>
