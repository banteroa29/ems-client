<template>
    <div class="sidebar "  @mouseover="toggleHover()" 
      @mouseout="toggleHover()" >	
			<div class="scroll-wrapper sidebar-wrapper scrollbar scrollbar-inner">
				<div class="sidebar-content">
					<ul class="nav nav-primary">
							<SidebarLink v-for="item in items" 
							:key="item.key" :class="item.class" 
							to="/" :icon="item.icon" v-bind:item="item"/>
							<li class="nav-section">
								<span class="sidebar-mini-icon">
									<i class="fa fa-ellipsis-h"></i>
								</span>
								<h4 class="text-section">Components</h4>
							</li>
					</ul>
				</div>
			</div>
	</div>
</template>
<script >
import { toggleHover } from './state'
import SidebarLink from './SidebarLink'
import '../../assets/js/jquery.scrollbar.min.js'
import json from '../../assets/json/sidebar.json'
export default {
	setup() {
		return {toggleHover}
	},
	components : {
		SidebarLink,
	},
	data() {
		return {
			settings: {
				maxScrollbarLength: 60
			},
			items : json
		}
	},
	mounted() {

	},
	methods : {
		scrollHandle(evt) {
			console.log(evt)
		}
	}
	
}
</script>