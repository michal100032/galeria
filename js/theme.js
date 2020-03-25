let theme = localStorage.getItem('theme');

const themeChanger = document.getElementById('theme');

if(!theme)
{
   localStorage.setItem('theme', 'dark');
   theme = 'dark';
}

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
   localStorage.setItem('theme', theme);
}

function redirect(event)
{
   if(event.target.href.indexOf('theme') >= 0)
      return;

   event.preventDefault();

   if(event.target.href.indexOf('?') >= 0)
   {
      window.location.href = event.target.href + "&theme="+theme;
   }
   else
   {
      window.location.href = event.target.href + "?theme="+theme;
   }

   
}

themeChanger.addEventListener('click',changeTheme);

window.addEventListener('load', () => {
   document.body.classList.remove('preload');
})