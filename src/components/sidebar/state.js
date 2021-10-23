import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const hovering = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)
export const toggleHover = () => (hovering.value = !hovering.value)
export const SIDEBAR_WIDTH = 21
export const SIDEBAR_WIDTH_COLLAPSED = 6.571
export const sidebarWidth = computed(
  () => collapsed.value ? `${SIDEBAR_WIDTH_COLLAPSED}em` : `${SIDEBAR_WIDTH}rem`
)