document.addEventListener("DOMContentLoaded", function() {
    const text = "Night.Win";
    let index = 1;
    let isDeleting = false;

    function animateTitle() {
        const currentText = text.substring(0, index);
        document.title = currentText;

        if (isDeleting) {
            index--;
            if (index < 1) {
                isDeleting = false;
                index = 1;
            }
        } else {
            index++;
            if (index > text.length) {
                isDeleting = true;
                index = text.length;
            }
        }

        if (index === 1 && isDeleting) {
            document.title = "ㅤ";
        }

        setTimeout(animateTitle, isDeleting ? 400 : 300);
    }

    animateTitle();
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { offsetWidth, offsetHeight } = card;
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;

            const xPercent = (x / offsetWidth) * 100;
            const yPercent = (y / offsetHeight) * 100;

            card.style.transform = `rotateY(${(xPercent - 50) / 5}deg) rotateX(${(yPercent - 50) / 5}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
});