<template>
    <div 
        id="mdlAddToWatch"
        @click="close" 
        ref="modalWrapper"
    >

        <div class="mdl">
            <div class="mdl-content">
                <p>Для підтвердження зміни пошти, ми надіслали лист на mynewmegaemail@gmail.com. Слідуйте інструкції.</p>
                <button type="submit" class="btn btn-mdl">Добре</button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ['title'],
    data: () => ({

    }),
    methods: {
        close(e) {
            if (this.$refs.modalWrapper == e.target || this.$refs.modalClose == e.target) {
                this.$emit('close')
            }
        }
    }
}
</script>