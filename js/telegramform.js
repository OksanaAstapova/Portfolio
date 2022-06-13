(function ($) {
  $(".contact-form").submit(function (event) {
    event.preventDefault();

    let successSendText = "The message was sent successfully";
    let errorSendText = "The message wasn't sent. Try again!";
    let requiredFieldsText = "Please, fill in text fields";

    let message = $(this).find(".contact-form__message");

    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);
    $.ajax({
      url: "send-message-to-telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: () => {
        $(".preloader").addClass("preloader_active");
      },
      success: function success(res) {
        $(".preloader").removeClass("preloader_active");

        let respond = $.parseJSON(res);

        if (respond === "SUCCESS") {
          message.text(successSendText).css("color", "#21d4bb");
          setTimeout(() => {
            message.text("");
          }, 4000);
        } else if (respond === "NOTVALID") {
          message.text(requiredFieldsText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
          }, 3000);
        } else {
          message.text(errorSendText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
          }, 4000);
        }
      }
    });
  });
})(jQuery);
