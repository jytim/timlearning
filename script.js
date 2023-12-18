$(document).ready(function{
    var openModalBtn = $("#openModalBtn");
    var closeModalBtn = $("#closeModalBtn");
    var modal = $("#myModal");

    openModalBtn.click(function{
        modal.show();
    });

    closeModalBtn.click(function{
        modal.hide();
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.hide();
        }
    });
});






