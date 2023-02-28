
deleteButtons = document.querySelectorAll('.delete-btn');
console.log(deleteButtons)

deleteButtons.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function() {
        const id = this.value
        console.log(id)
    });
});
  