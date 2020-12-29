let textarea = document.querySelector('.form-message__input');

textarea.addEventListener('keyup', () => {
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});