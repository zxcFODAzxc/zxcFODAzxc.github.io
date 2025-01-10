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
