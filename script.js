document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!name || !message) return; // Ensure both fields are filled

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}:</strong> ${message}`;

    document.getElementById('commentsDisplay').appendChild(commentDiv);

    document.getElementById('commentForm').reset();
});