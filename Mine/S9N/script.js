document.addEventListener("DOMContentLoaded", function() {
    const originalTitle = "S9NORU";
    const newTitle = "S9NORU даун";

     function changeTitle() {
        document.title = newTitle;
        setTimeout(() => {
            document.title = originalTitle;
        }, 1000);
    }

    document.title = originalTitle;
    // setTimeout(changeTitle, 2000); -- no theard
    setInterval(changeTitle, 3000);
});
