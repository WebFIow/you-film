<template>
    <div 
        id="mdlAddToWatch"
        @click="close" 
        ref="modalWrapper"
    >
<!--        FIRST MODAL-->

<!--        <div class="mdl">-->
<!--            <div class="mdl-header">-->
<!--                <p class="mb-0">Додати “Alita: Battle Angel” у <span class="close float-right"><i class="fas fa-times"></i></span></p>-->
<!--            </div>-->
<!--            <div class="mdl-content">-->
<!--                <form>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="later">-->
<!--                        <label class="form-check-label" for="later">Подивитися пізніше (99)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="early">-->
<!--                        <label class="form-check-label" for="early">Подивитися раніше (13)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="later1">-->
<!--                        <label class="form-check-label" for="later1">Подивитися пізніше (99)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
<!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
<!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
<!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
<!--                    </div>-->
<!--                    <div class="form-group form-check">-->
<!--                        <input type="checkbox" class="form-check-input" id="notwatch">-->
<!--                        <label class="form-check-label" for="notwatch">Не дивитися (9)</label>-->
<!--                    </div>-->
<!--                </form>-->
<!--            </div>-->
<!--            <div class="mdl-addon">-->
<!--                <p>+  Створити новий фільм–ліст</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        FIRST MODAL-->

<!--        SECOND MODAL-->
<!--        <div class="mdl">-->
<!--            <div class="mdl-header">-->
<!--                <p class="mb-0">Додати “Alita: Battle Angel” у <span class="close float-right"><i class="fas fa-times"></i></span></p>-->
<!--            </div>-->
<!--            <div class="mdl-content">-->
<!--                <form>-->
<!--                    <div class="form-group">-->
<!--                        <label class="form-label" for="name">Введіть назву нового Фільм-Листу</label>-->
<!--                        <input type="name" class="form-control" id="name">-->
<!--                    </div>-->
<!--                    <button type="submit" class="btn btn-mdl">Додати</button>-->
<!--                </form>-->
<!--            </div>-->
<!--            <div class="mdl-addon unac">-->
<!--                <p>+  Створити новий фільм–ліст</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        SECOND MODAL-->

<!--        THIRD MODAL-->
                <div class="mdl">
                    <div class="mdl-header">
                        <p class="mb-0">
                            Додати {{title}} у 
                            <span class="close float-right">
                                <i 
                                    class="fas fa-times"
                                    @click="close"
                                    ref="modalClose"
                                ></i>
                            </span>
                        </p>
                    </div>
                    <div class="mdl-content mdl-add-btn">
                        <form>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="later">
                                <label class="form-check-label" for="later">Подивитися пізніше (99)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="early">
                                <label class="form-check-label" for="early">Подивитися раніше (13)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="later1">
                                <label class="form-check-label" for="later1">Подивитися пізніше (99)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="notwatch">
                                <label class="form-check-label" for="notwatch">Не дивитися (9)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="notwatch">
                                <label class="form-check-label" for="notwatch">Не дивитися (9)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="notwatch">
                                <label class="form-check-label" for="notwatch">Не дивитися (9)</label>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="notwatch">
                                <label class="form-check-label" for="notwatch">Не дивитися (9)</label>
                            </div>
                        </form>
                    </div>
                    <div class="mdl-content">
                        <button type="submit" class="btn btn-mdl">Додати</button>
                    </div>
                    <div class="mdl-addon">
                        <p>+  Створити новий фільм–ліст</p>
                    </div>
                </div>
        <!--        THIRD MODAL-->
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