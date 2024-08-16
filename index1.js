let hoverCount = 0;

    const hoverDiv = document.getElementById('hoverDiv');

    hoverDiv.addEventListener('mouseover', function() {
        hoverCount++;
        if (hoverCount > 10) {
            alert('You are anonymous user');
            document.body.style.backgroundColor = 'red';
        }
    });