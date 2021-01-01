const addBtn = document.getElementById('add')
const noteContainer = document.querySelector('.note-container')

const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
  notes.forEach(note => addNewNote(note))
}
console.log(notes)

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="note">
    <div class="tools">
      <button id="edit"><i class="fas fa-edit"></i></button>
      <button id="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="text-main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  </div>  
  `

  const editBtn = note.querySelector('#edit')
  const deleteBtn = note.querySelector('#delete')
  const textMain = note.querySelector('.text-main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  textMain.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()

  })
  editBtn.addEventListener('click', () => {
    textMain.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    textMain.innerHTML = marked(value)
    updateLS()
  }),

    noteContainer.appendChild(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')
  const notes = []

  notesText.forEach(note => notes.push(note.value))

  console.log(notes)
  localStorage.setItem('notes', JSON.stringify(notes))

}

