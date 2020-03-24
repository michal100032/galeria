const urlParams = new URLSearchParams(window.location.search);
let theme = urlParams.get("theme");

const themeChanger = document.getElementById('theme');
const a = document.querySelectorAll('a');

if(!theme)
   theme = 'dark';

updateTheme();

console.log(theme);

function changeTheme()
{
   if(theme == 'dark')
      theme = 'light';
   else
   theme = 'dark';

   updateTheme();
}

function updateTheme()
{
   if(theme == 'dark')
   {
      document.body.classList.add('dark');
      themeChanger.innerHTML = `<i class="icon-moon-inv"></i>`;
   }
   else
   {
      document.body.classList.remove('dark');
      themeChanger.innerHTML = `<i class="icon-sun-inv"></i>`;
   }
}

function redirect(event)
{
   if(event.target.href.indexOf('theme') >= 0)
      return;

   event.preventDefault();

   if(event.target.href.indexOf('?') >= 0)
   {
      event.target.href += "&theme="+theme;
   }
   else
   {
      event.target.href += "?theme="+theme;
   }

   window.location.href = event.target.href;
}

for(var i = 0; i < a.length; i++)
{
   a[i].addEventListener("click", redirect);
}


themeChanger.addEventListener('click',changeTheme);

window.addEventListener('load', () => {
   document.body.classList.remove('preload');
})