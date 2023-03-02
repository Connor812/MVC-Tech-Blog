const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-textarea').value.trim();
  
    if (comment) {

        const blogpost = document.querySelector('.card');
        const blogPost_id = blogpost.getAttribute('id');
    
      const response = await fetch('/create_comment', {
        method: 'POST',
        body: JSON.stringify({ blogPost_id, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/#${blogPost_id}`);
      } else {
        alert('Failed to Create BlogPost');
      }
    } else {
      alert('Need to enter information');
    }
  };
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', commentFormHandler);