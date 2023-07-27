<script>
import "@/assets/css/homeScreen.css"
import { api } from "@/services/api.js"
import Alert from "@/components/Alert.vue"

export default {
    components: { Alert },
    data() {
        return {
            showPassword: false,
            username: "emipmt",
            email: "emipmttt@gmail.com",
            password: "123123"
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword
        },
        async signUp() {
            try {
                const signupResponse = await api.post("/auth/signup", {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })

                localStorage.setItem("token", signupResponse.data.token)
                localStorage.setItem("username", username)

                this.$router.push("/play/")
            } catch (error) {
                console.log(this.$refs.alertComponent.showAlert);
                this.$refs.alertComponent.showAlert(error.response.data.message, 'error');
            }
        }
    }
}

</script>

<template>
    <main class="row-responsive">
        <div class="col">
            <h1>Sign Up</h1>
        </div>
        <div class="col">
            <Alert ref="alertComponent"></Alert>
            <form @submit.prevent="signUp">
                <input v-model="username" type="text" placeholder="Username" required>
                <br>
                <input v-model="email" type="email" placeholder="Email Address" required>
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

                <button type="submit" class="button" style="margin-top: 15px;">NEXT</button>
                <RouterLink to="/">
                    <div class="button" style="margin-top: 15px;">BACK</div>
                </RouterLink>
            </form>
        </div>
    </main>
</template>