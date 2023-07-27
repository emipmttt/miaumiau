<template>
    <div class="game-board" :style="`width:${world.size * 32}px; height:${world.size * 32}px`">
        <WorldItem v-for="(item, index) in world.items" :key="'item_' + index" :itemDetails="itemDetails" :item="item" />
    </div>
</template>
<script>
import WorldItem from "./WorldItem.vue"
export default {
    components: {
        WorldItem
    },
    props: {
        world: Object,
        itemDetails: Object
    }
}
</script>
<style>
.game-board {
    /* background-color: #333; */
    background: url(../../assets/img/grass.gif);
    box-shadow:inset 0 0px 8px 20px #333;
    /* border-radius: 35px; */
}

.game-board .item {
    position: absolute;
}
</style>