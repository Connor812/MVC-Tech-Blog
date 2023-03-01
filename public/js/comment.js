const commentOnBlogpost = document.querySelector("#all-blogposts");

commentOnBlogpost.addEventListener("click", (e) => {
    if (e.target.value !== undefined) {
        var blogpost_id = e.target.value;
        console.log(blogpost_id)
        fetch(`/add_comment/${e.target.value}`, {
            method: 'GET',
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    e.stopPropagation();
});
