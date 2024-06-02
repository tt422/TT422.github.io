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
document.getElementById('viewPhotoYuan').addEventListener('click', function() {
    // 这里可以是打开新页面查看照片，或者使用模态框展示
    window.open("yuan.jpg", "_blank"); 
});

document.getElementById('viewPhotoShen').addEventListener('click', function() {
    window.open("shen.jpg", "_blank");
});

document.getElementById('viewPhotoYu').addEventListener('click', function() {
    window.open("yu.jpg", "_blank");
});
