<template>
    <div class="product-list">
        <Search @submit="searchSubmit"></Search>
    </div>
</template>
<script>
import Search from "@/components/search.vue";
export default {
    components: {
        Search,
    },
    methods: {
        searchSubmit(form) {
            console.log("searchRes", form);
        }
    }
}
</script>