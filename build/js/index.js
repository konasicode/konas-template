const lang_holder = document.getElementById('lang-holder');
const lang_dropdown = document.getElementById('lang-dropdown');
const toggle_menu_handler = () => {
   lang_dropdown.classList.toggle('hidden');
   lang_dropdown.classList.toggle('block');
};

document.addEventListener('click', (e) => {
   if ((e.target !== lang_dropdown) && (e.target !== lang_holder)) {
      lang_dropdown.classList.add('hidden');
      lang_dropdown.classList.remove('block');
   }
});

const toggle_menu = () => {
   lang_holder.addEventListener('click', toggle_menu_handler);
};

const switch_lang = () => {
   lang_dropdown.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target);
      const target_lang = e.target.textContent;
      lang_holder.innerHTML = target_lang;
      toggle_menu_handler();
   });
};

toggle_menu();
switch_lang();

