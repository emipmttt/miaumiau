<template>
    <transition name="alert-transition" @after-enter="afterEnter" @after-leave="afterLeave">
        <div v-if="isShowAlert" class="alert" :class="alertType">
            <div class="alert-content">
                <div>
                    {{ message }}
                    <br>
                    <br>
                    <button @click="hideAlert" class="button">Ok</button>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    data() {
        return {
            isShowAlert: false,
            message: '',
            alertType: '',
        };
    },
    methods: {
        showAlert(message, type = 'success') {
            this.message = message;
            this.alertType = type;
            this.isShowAlert = true;
        },
        hideAlert() {
            this.isShowAlert = false;
        },
        afterEnter() {
            // Animation completed after the alert appears
            // You can perform additional actions if needed
        },
        afterLeave() {
            // Animation completed after the alert disappears
            // You can perform additional actions if needed
        },
    },
};
</script>
  
<style scoped>
.alert-transition-enter-active {
    animation: alert-enter 0.3s ease-in-out;
}

.alert-transition-leave-active {
    animation: alert-leave 0.3s ease-in-out;
}

@keyframes alert-enter {
    from {
        opacity: 0;
        transform: translateY(-10px) translateX(-50%);
    }

    to {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }
}

@keyframes alert-leave {
    from {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }

    to {
        opacity: 0;
        transform: translateY(-10px) translateX(-50%);
    }
}

.alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
}

.alert-content {
    display: flex;
    align-items: center;
}

.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.close-button {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #ccc;
    border: none;
    color: #fff;
    cursor: pointer;
}
</style>
  