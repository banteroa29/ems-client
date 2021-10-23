<template>
    <div class="page-header">
        <h4 class="page-title">{{items.home.label}}</h4>
        <ul class="breadcrumbs">
            <li class="nav-home">
                <a href="#">
                    <i :class="items.home.icon"></i>
                </a>
            </li>
            <template v-for="item in items.items" :key="item.key">
                 <li class="separator">
                <i class="pi pi-angle-right"></i>
                </li>
                <li class="nav-item">
                    <a href="#">{{ item.label }}</a>
                </li>
            </template>
           
         
        </ul>
    </div>
</template>
<script>
export default {
    props : {
        items : {type : Array}
    }
}
</script>