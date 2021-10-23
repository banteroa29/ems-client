<template>
  <div 
    @mouseover="isHovering = true" 
      @mouseout="isHovering = false"
      class="layout-menu-wrapper layout-sidebar-active" 
     
      >
       <!-- :class="{'layout-sidebar-active' : isHovering}" -->
    <div class="menu-logo">
      <a href="#" class="logo">
        <img alt="Vue logo" src="../../assets/logo.png"  />
      </a>
      <a href="#" class="app-name">
        <img alt="Vue logo" src="../../assets/appname-light.png" />
      </a>
      <a href="#" class="menu-pin">
        <span class="pi pi-lock" />
      </a>
    </div>

    <div class="layout-menu-container">
      <ul role="menu" class="layout-menu">
        <li class="layout-root-menuitem" role="menuitem"><!----><!----><a href="#" class="p-ripple" role="menuitem"><i class="layout-menuitem-icon pi pi-fw pi-home"></i><span class="layout-menuitem-text">Favorites</span><i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i><span class="p-ink" style="height: 238px; width: 238px; top: -98px; left: 55px;"></span></a><ul role="menu" style="display: none;" class=""><li class="" role="menuitem"><!----><a href="#/" class="active-route router-link-exact-active p-ripple" exact="" aria-current="page"><i class="layout-menuitem-icon pi pi-fw pi-home"></i><span class="layout-menuitem-text">Dashboard</span><!----><span class="p-ink"></span></a><!----><!----></li></ul></li>
        <li class="layout-root-menuitem" role="menuitem">
          <a href="#" class="p-ripple" role="menuitem">
            <i class="layout-menuitem-icon pi pi-fw pi-star-o"></i>
            <span class="layout-menuitem-text">UI Kit</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            <span class="p-ink"></span>
          </a>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
// import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { 
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  data()  {
    return {
      isHovering : false
    }
  }
  
}
</script>

<style>
.layout-menu-wrapper {
  background: linear-gradient(180deg, #2E323F 0%, #0A061A 100%);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  mix-blend-mode: normal;
  transition: all 0.2s;
  transform: none;
  border-radius: 0 40px 40px 0;
  display: flex;
  width: 6.571em;
  flex-direction: column;
}

.layout-menu-wrapper .menu-logo {
  padding-left: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 22px 0 34px;
}
.layout-menu-wrapper .menu-logo .logo img{ 
  height: 2.5rem;
  border: 0 none;
}
.layout-menu-wrapper .menu-logo .app-name{
  display: none;
} 
.layout-menu-wrapper .menu-logo .app-name img {
    height: 1.714rem;
    padding-left: 16px;
}
.layout-menu-wrapper .menu-logo .menu-pin {
    background: rgba(255, 255, 255, 0.05);
    color: #C8CCD8;
}
.layout-menu-wrapper .menu-logo .menu-pin {
    display: none;
    width: 32px;
    height: 32px;
    margin-left: auto;
    border-radius: 6px;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}

.layout-menu-wrapper.layout-sidebar-active {
  transform: translate3d(0px,0px,0px);
  width: 21rem;
}
.layout-menu-wrapper.layout-sidebar-active .menu-logo .app-name {
  display: inline;
  transition: all 0.2s;
}
.layout-menu-wrapper.layout-sidebar-active .menu-pin {
    display: flex;
    align-items: center;
    justify-content: center;
}
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
.layout-menu-wrapper.layout-sidebar-active .layout-menu-container {
    overflow: auto;
}
.layout-menu-wrapper .layout-menu-container {
    height: 100%;
    overflow: hidden;
}
.layout-menu-wrapper .layout-menu-container {
    height: 100%;
    overflow: auto;
    padding-bottom: 2rem;
}

.layout-menu-wrapper .layout-menu-container .layout-menu {
    list-style-type: none;
    margin: 0;
    padding: 0 26px 0 22px;
    overflow: hidden;
}
.layout-menu-wrapper .layout-menu-container .layout-menu {
    padding: 0 1.5rem;
}
.layout-menu-wrapper ul {
    margin: 0;
    padding: 0;
    outline: 0;
    overflow: hidden;
    list-style-type: none;
}

.layout-menu-wrapper .layout-menu-container .layout-menu > li:first-child {
    margin-top: 2rem;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li {
    border-radius: 8px;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a {
    margin: 0px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    user-select: none;
    border-radius: 8px;
    transition: background-color 0.2s, color 0.2s;
}
.p-ripple {
    overflow: hidden;
    position: relative;
}

.layout-menu-wrapper .layout-menu-container .layout-menu li > a > i {
    font-size: 1.25rem;
    width: auto;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li {
    padding: 6px;
}


.layout-menu-wrapper .layout-menu-container .layout-menu li a, .layout-wrapper.layout-sidebar .layout-menu-wrapper .layout-menu-container .layout-menu li a {
    color: #C8CCD8;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a {
    margin: 0px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    padding: 8px;
    user-select: none;
    cursor: pointer;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    user-select: none;
    border-radius: 8px;
    transition: background-color 0.2s, color 0.2s;
}
.p-ripple {
    overflow: hidden;
    position: relative;
}

.layout-menu-wrapper .layout-menu-container .layout-menu li > a > i {
    font-size: 1.25rem;
    width: auto;
}

.layout-menu-wrapper.layout-sidebar-active .layout-menu-container .layout-menu li > a > span {
    visibility: visible;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a > span {
    margin: 0 0.5rem;
    margin-left: 1rem;
    visibility: hidden;
    white-space: nowrap;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a .layout-menuitem-text {
    margin-left: 1rem;
}

.layout-menu-wrapper.layout-sidebar-active .layout-menu-container .layout-menu li > a > i.layout-submenu-toggler {
    visibility: visible;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a > i.layout-submenu-toggler {
    -moz-transition: transform 0.2s;
    -o-transition: transform 0.2s;
    -webkit-transition: transform 0.2s;
    transition: transform 0.2s;
    margin-left: auto;
    font-size: 12px;
    visibility: hidden;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a > i {
    font-size: 1.25rem;
    width: auto;
}
.layout-menu-wrapper .layout-menu-container .layout-menu li > a .layout-submenu-toggler {
    margin-left: auto;
}
.layout-menu-wrapper.layout-sidebar-active .layout-menu-container .layout-menu li > a > span {
    visibility: visible;
 }
.layout-menu-wrapper .layout-menu-container .layout-menu li > a > span {
    margin: 0 0.5rem;
    margin-left: 1rem;
    visibility: hidden;
    white-space: nowrap;
}
</style>

<style scoped>

</style>