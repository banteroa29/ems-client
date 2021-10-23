<template>
<li v-if="item.submenu.length !== 0" :class="[isActiveParent ? 'active' : '',item.class,item.key === activeItem ? 'submenu' : '']" @click="selectItem(item.key)">
  <a data-toggle="collapse" href="#" :class="item.key === activeItem ? '' : 'collapsed'" aria-expanded="false">
    <i :class="item.icon"></i>
    <p>{{item.name}}</p>
    <span class="caret"></span>
  </a>
  <div class="collapse " :class="item.key === activeItem ? 'show' : ''" id="dashboard">
    <ul class="nav nav-collapse">
      <li v-for="subitem in item.submenu" :key="subitem.key" :class="getActive(subitem.to,currentRouteName)" @click="addActiveParent(subitem.to,currentRouteName)"> 
        <router-link :to="subitem.to">
          <span class="sub-item">{{subitem.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</li>
<li v-else class="nav-item">
  <router-link :to="item.to" >
    <i :class="item.icon"></i>
    <p>{{item.name}}</p>
    <span class="badge badge-success">{{ route }}</span>
  </router-link>
</li>
 
</template>
<script scoped>
import { useRoute } from 'vue-router'
// import { collapsed } from './state'
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    item : { type:Array },
  },
  data()  {
    return {
      collapsed : false,
      activeItem : null,
      isActiveParent : false
    }
  },
  methods: {
    selectItem(i) {
      this.activeItem =  this.activeItem === null ? i : null
    },
    getActive(strA,strB) {
      if(strA === strB) {
        return 'active';
      } else {
        return '';
      }
    },
    addActiveParent(strA,strB) {
      if(strA === strB) {
        this.isActiveParent = true
      } else {
        this.isActiveParent = false
      }
    }
  },
  setup() {
    const route = useRoute()
    const path = route.path;
    return { path }
  },
  computed: {
      currentRouteName() {
          return this.$route.path;
      }
  }
}
</script>

<style scoped>
</style>