const deleteButtons = document.querySelector("#user-blogposts");
console.log(deleteButtons)

deleteButtons.addEventListener("click", (e) => {
    if (e.target.value !== undefined) {
        var postId = e.target.value;
        console.log(postId)
        fetch(`/dashboard/${postId}`, { 
            method: "DELETE" 
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    e.stopPropagation();
});