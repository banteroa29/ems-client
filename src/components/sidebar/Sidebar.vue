<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="menu-logo">
        <a href="#" class="logo">
          <img alt="Vue logo" src="../../assets/logo.png" />
        </a>

        <a href="#" class="app-name">
          <h1>
              <span>
                Vue Sidebar
              </span>
            </h1>
        </a>
    </div>
    <!-- <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>Vue Sidebar</span>
    </h1> -->

    <PanelMenu :model="items" />
    <!-- <SidebarLink to="/" icon="pi pi-home">Home</SidebarLink> -->
    <!-- <SidebarLink to="/dashboard" icon="pi pi-chart-bar">Dashboard</SidebarLink> -->
    <!-- <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink> -->
    <!-- <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink> -->
    <!-- <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink> -->

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="pi pi-angle-double-right" />
    </span>
  </div>
</template>

<script>
// import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import PanelMenu from 'primevue/panelmenu';

export default {
  props: {},
  components: { 
    PanelMenu 
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  data() {
        return {
            expandedKeys: {},
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }]
                        }
                    ]
                }
            ]
        }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border-radius: 0px 40px 40px 0px;
}
.sidebar .menu-logo {
  padding-left: 25px;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 22px 0 34px;
}
.sidebar .menu-logo .logo img {
  height: 2.5rem;
  border: 0 none;
}

.sidebar .menu-logo .app-name {
  display: inline;
  transition: all 0.2s;
}
.sidebar .menu-logo .app-name h1 {
  height: 1.71rem;
  padding-left: 16px;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>