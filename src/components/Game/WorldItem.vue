<template>
    <div class="item"
        :style="`left:${item.x}px; top:${item.y}px; width:${itemData?.boxWidth}px; height:${itemData?.boxHeight}px;  z-index:${item.y};`">
        <img :src="getImageUrl(item.name)"
            :style="`width: ${itemData?.imageWidth || 32}px; height: ${itemData?.imageHeight || 32}px; margin-top: ${itemData?.marginTop}px; margin-left: ${itemData?.marginLeft}px;`">
    </div>
</template>
<script>
export default {
    props: {
        item: Object,
        itemDetails: Object
    },
    computed: {
        itemData() {
            console.log(this.itemDetails[this.item.name]);
            return this.itemDetails[this.item.name]
        }
    },
    methods: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.item.name}.gif`, import.meta.url).href
        }
    },
    mounted() {
    }
}
</script>