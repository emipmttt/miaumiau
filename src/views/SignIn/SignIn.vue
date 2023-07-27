<template>
    <main class="row-responsive">
        <div class="col">
            <h1>Sign In</h1>
        </div>
        <div class="col">
            <Alert ref="alertComponent"></Alert>
            <form @submit.prevent="signin">
                <input v-model="username" type="text" placeholder="Username" required>
                <br>
                <div class="row">
                    <div class="col" style="flex:2">
                        <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password"
                            style="margin-right: 15px;" required>
                    </div>
                    <div class="col">
                        <div @click="togglePassword" class="button">
                            SHOW
                        </div>
                    </div>
                </div>

                <button type="submit" class="button" style="margin-top: 15px;">PLAY</button>
                <RouterLink to="/">
                    <div class="button" style="margin-top: 15px;">BACK</div>
                </RouterLink>
            </form>
        </div>
    </main>
</template>
  
<script>
import { api } from "@/services/api.js"
import Alert from "@/components/Alert.vue"

export default {
    components: { Alert },
    data() {
        return {
            showPassword: false,
            username: "emipmt",
            password: "123123"
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword
        },
        async signin() {
            try {
                const loginResponse = await api.post("/auth/login", {
                    username: this.username,
                    password: this.password
                })

                localStorage.setItem("token", loginResponse.data.token)
                localStorage.setItem("username", this.username)

                this.$router.push("/play/")
            } catch (error) {
                this.$refs.alertComponent.showAlert(error.response.data.message, 'error');
            }
        }
    }
}
</script>
  