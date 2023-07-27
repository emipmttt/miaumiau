<template>
    <transition name="modal-transition" @after-enter="afterEnter" @after-leave="afterLeave">
        <div v-if="isShowModal" class="modal">
            <div class="modal-content">
                <slot></slot>
                <button @click="hideModal" class="button">Close</button>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    data() {
        return {
            isShowModal: false,
        };
    },
    methods: {
        showModal() {
            this.isShowModal = true;
        },
        hideModal() {
            this.isShowModal = false;
        },
        afterEnter() {
            // Animation completed after the modal appears
            // You can perform additional actions if needed
        },
        afterLeave() {
            // Animation completed after the modal disappears
            // You can perform additional actions if needed
        },
    },
};
</script>
  
<style scoped>
.modal-transition-enter-active {
    animation: modal-enter 0.3s ease-in-out;
}

.modal-transition-leave-active {
    animation: modal-leave 0.3s ease-in-out;
}

@keyframes modal-enter {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes modal-leave {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-10px);
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
}

.modal-content {
    background-color: rgba(0, 0, 0, .8);
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    color: white;
}

.button {
    margin-top: 15px;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: #ccc;
    border: none;
    color: #fff;
    cursor: pointer;
}
</style>
  