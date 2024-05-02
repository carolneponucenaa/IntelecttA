// script.js
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    
    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;
    messageBox.appendChild(newMessage);
    
    messageInput.value = ''; 
});
