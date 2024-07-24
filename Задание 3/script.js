document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'REPLACE_ME';
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не в порядке!');
            }
            return response.json();
        })
        .then(data => {
            const catImagesContainer = document.getElementById('cat-images');
            data.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = "Бенгальский кот";
                catImagesContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
});

$(document).ready(function() {
    $('#add-class').click(function() {
        $('#cat-container').addClass('active');
    });
    $('#remove-class').click(function() {
        $('#cat-container').removeClass('active');
    });
    $('#toggle-class').click(function() {
        $('#cat-container').toggleClass('active');
    });
});

