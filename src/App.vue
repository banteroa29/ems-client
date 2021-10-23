<script>

// import Sidebar from '@/components/sidebar/Sidebar'
// import SidebarMenu from '@/components/sidebar/SidebarMenu'
import Header from '@/components/header/Header'
import SidebarAtlantis from '@/components/sidebar/SidebarAtlantis'

import { hovering,collapsed,sidebarWidth } from '@/components/sidebar/state'
// import $ from 'jquery'
// import '@/assets/js/atlantis.js'

export default {
  components: { 
    Header,
    SidebarAtlantis
  },
  setup() {
    return { 
      hovering,
      collapsed,
      sidebarWidth 
    }
  },
  mounted() {
    
  }
}
</script>
<template>
    <div class="wrapper  " :class="{'sidebar_minimize' : collapsed,'sidebar_minimize_hover' : hovering }">
      <Header />
      <SidebarAtlantis/>

        <router-view/>
    </div>
</template>

<style>

/* @import 'assets/css/bootstrap.min.css';
@import 'assets/css/atlantis.min.css'; */

</style>
