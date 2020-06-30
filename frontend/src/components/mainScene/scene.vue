<template>
  <div id="scene">
      <television ref="television"/>
      <TVstand/>
      <decor ref="decor"/>
      
  </div>
</template>

<script>

import TVstand from '@/components/mainScene/TVstand'
import television from '@/components/mainScene/television'
import decor from '@/components/mainScene/decor'

export default {
  name: 'scene',
  components: {
    television,
    TVstand,
    decor
  }
}
</script>

<style lang="scss" >
</style>
