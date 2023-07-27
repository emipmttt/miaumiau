<template>
    <div>
        <div class="button" style="position:fixed; top: 10px; left: 10px; z-index: 9999" @click="showModal()">WORLDS</div>
        <Modal ref="worldsModal">
            <h2>Worlds</h2>
            <br>
            <CreateWorld />
            <br>
            <div v-for="world in worldList">
                <div @click="changeWorld(world.name)" class="button">{{ world.name }}</div>
                <br>
            </div>
        </Modal>
    </div>
</template>
  
<script>
import Modal from '@/components/Modal.vue';
import CreateWorld from '@/components/CreateWorld.vue';
import { api } from '@/services/api.js';

export default {
    components: {
        Modal,
        CreateWorld,
    },
    data() {
        return {
            worldList: [],
        };
    },
    methods: {
        showModal() {
            this.$refs.worldsModal.showModal();
        },
        async fetchWorlds() {
            try {
                const response = await api.get('world/list');
                this.worldList = response.data.worlds;
            } catch (error) {
                console.error('Failed to fetch worlds', error);
            }
        },
        changeWorld(name) {
            this.$router.push('/play/' + name);
            setTimeout(() => {
                location.reload();
            }, 100);
        },
    },
    mounted() {
        this.fetchWorlds();
    },
};
</script>
