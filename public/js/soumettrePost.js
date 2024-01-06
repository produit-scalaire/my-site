
    document.addEventListener("DOMContentLoaded", function() {
        let buttons = document.querySelectorAll("[id^='but']");
        let windowElement = document.querySelector('#hiddenDiv')
        buttons.forEach(button => {
            button.addEventListener("click", function(event) {
                const postId = event.currentTarget.getAttribute("data-post-id");
                openPostWindow(postId);
            });
        });
        function openPostWindow(postId) {
            const form = windowElement.querySelector('form');
            form.setAttribute('action', `/submitResolution/${postId}`);
            windowElement.style.display = 'block';
        }
    });
