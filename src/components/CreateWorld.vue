<template>
    <div>
        <div class="button" @click="this.$refs.createWorldModal.showModal()">Create World</div>
        <Modal ref="createWorldModal">
            <Alert ref="createWorldAlert"></Alert>
            <h2>Create World</h2>
            <br>
            <form @submit.prevent="createWorld">
                <input v-model="name" type="text" placeholder="Name" maxlength="30" style="margin-bottom: 15px;" required>
                <input v-model="size" type="number" placeholder="Size" max="140" min="30" style="margin-bottom: 15px;"
                    required>
                <p>If you don't define a passphrase, everyone could join</p>
                <br>
                <input v-model="passphrase" type="text" placeholder="passphrase" style="margin-bottom: 15px;">
                <button type="submit" class="button">Create</button>
                <br>
            </form>
        </Modal>
    </div>
</template>
  
<script>
import { api } from "../services/api"
import Modal from './Modal.vue';
import Alert from './Alert.vue';

export default {
    components: {
        Modal,
        Alert
    },
    data() {
        return {
            name: '',
            size: '',
            passphrase: ''
        };
    },
    methods: {
        async createWorld() {
            try {
                await api.post('/world', {
                    name: this.name,
                    size: this.size,
                    passphrase: this.passphrase,
                     
                });

                this.$router.push("/play/" + this.name)
                setTimeout(() => {
                    location.reload()
                }, 100);
            } catch (error) {
                console.log(error);
                this.$refs.createWorldAlert.showAlert(error.response.data.message, 'error');
            }
        }
    }
};
</script>
  