const CreatenewPost = async function(e) {
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  
  
  fetch('/api/post`', {
    method: 'POST', 
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' }
  });
}
