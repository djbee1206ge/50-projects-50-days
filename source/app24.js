const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const ProfileName = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="../assets/img/coder.jpg" alt="Photo by Shahadat Rahman on Unsplash">'
  title.innerHTML = 'Front-end Developer'
  excerpt.innerHTML = 'I design and code beautifully simple things, and I love what I do.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
  ProfileName.innerHTML = 'John Doe'
  date.innerHTML = 'Dec 25, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
