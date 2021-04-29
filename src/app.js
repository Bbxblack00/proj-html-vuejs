function initVue() {

  new Vue({
  el: '#app',
  data: {
    links: [{
      nome:'Home',
      code: '<div class="menu-container">

        <ul>
          <li>
            <a href="#">Esempio menu</a>
          </li>

          <li>
            <a href="#">Esempio menu</a>
          </li>

          <li>
            <a href="#">Esempio menu</a>
          </li>
        </ul>'
    },
    'Pages', 'Courses', 'features', 'Blog', 'Shop'],

      }
    ]
    hover: false
  },
  methods: {
    menuDrop: function() {

    }
  }
});
}

initVue();
