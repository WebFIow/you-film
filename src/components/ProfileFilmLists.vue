<template>
  <div
    id="tab-content1"
    class="tab-content"
    role="tabpanel"
    aria-labelledby="description"
    aria-hidden="false"
  >
    <p>
      Немає жодного фільм-листа 😢<br />Прямуй на сторінку Фільми, та створи
      свої власні підбірки фільмів.
    </p>

    <button class="accordion" @click="showAcc">Подвитися пізніше</button>
    <div class="panel">
      <ul class="accUL">
        <li>
          <div class="fCard">
            <div class="fImgCard">
              <img src="../../public/img/films/fim1.jpeg" alt="film poster" />
            </div>
            <div class="fTextCard">
              <div class="row mx-0 justify-content-between">
                <h5>Форест Гамп</h5>
                <p>
                  <span class="star"></span><span class="rtNum">8.6</span>
                  <span class="heart"></span>
                </p>
              </div>
              <p class="sticker">2019, Action</p>
              <p>text</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
    showAcc(e) {
      const el = e.target;
      el.classList.toggle("active");
      const panel = el.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 70 + "px";
      }
    },
  },
};
</script>
