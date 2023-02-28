const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#blogpost-textarea').value.trim();
  
    if (title && description) {
    
      const response = await fetch('/create_blogpost', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to Create BlogPost');
      }
    } else {
      alert('Need to enter information');
    }
  };
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', loginFormHandler);
  