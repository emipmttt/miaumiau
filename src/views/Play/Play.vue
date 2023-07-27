<template>
    <div class="play">
        <Worlds />
        <Game :world="worldData" :itemDetails="itemDetails"></Game>
    </div>
</template>
  
<script>
import Worlds from '@/components/Worlds.vue';
import Game from '@/components/Game/Game.vue';
import { api } from '@/services/api.js';

export default {
    components: {
        Worlds,
        Game,
    },
    data() {
        return {
            userData: {},
            worldData: {
                worlds: [],
            },
            itemDetails: {}
        };
    },
    methods: {
        async fetchUserData() {
            try {
                const response = await api.get('users/' + localStorage.getItem('username'));
                this.userData = response.data;
            } catch (error) {
                console.error('Failed to fetch user data', error);
            }
        },
        async fetchWorldData() {
            if (this.$route.params.name) {
                try {
                    const worldReponse = await api.get('world/' + this.$route.params.name);
                    this.worldData = worldReponse.data;
                    const itemDetails = await api.get('world/item-details');
                    this.itemDetails = itemDetails.data;
                } catch (error) {
                    console.error('Failed to fetch world data', error);
                }
            }
        },
    },
    async mounted() {
        await this.fetchUserData();
        await this.fetchWorldData();
    },
};
</script>
  
<style>
.play {
    min-height: 100vh;
    background-color: #333;
}

.play .button {
    display: inline-block;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    box-sizing: border-box;
    border: none;
    font-size: 12px;
}

.play .button:hover {
    background-color: rgba(255, 255, 255, 255.3);
    color: #333;
}

.play input {
    display: inline-block;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    box-sizing: border-box;
    border: none;
    font-size: 12px;
    backdrop-filter: blur(2px);
    width: 100%;
}

.play input::placeholder {
    color: white;
}
</style>
  