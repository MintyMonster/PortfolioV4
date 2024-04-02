$(document).ready(function () {

    // Element variables
    var name = $("#fname");
    var email = $("#email");
    var phone = $("#phone");
    var subject = $("#subject");
    var message = $("#message");
    var button = $("#btn");
    const btnText = document.querySelector("#btnText");

    // Classes
    const success = "contact-success";
    const error = "contact-error";

    // Regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/

    const SuccessCheck = (element) => { $(element).removeClass(error).addClass(success); }
    const ErrorCheck = (element) => { $(element).removeClass(success).addClass(error); }

    // Check for error function
    const CheckError = (element) => {
        if (element.val() == "")
            ErrorCheck(element);
        else
            SuccessCheck(element);
    }

    // Email check function
    const CheckErrorRegex = (element, regex) => {
        if ($.trim(element.val()).match(regex)) {
            if (element.val() == "") {
                ErrorCheck(element);
            } else {
                SuccessCheck(element);
            }
        } else {
            ErrorCheck(element);
        }
    }

    // Blur functions
    $(name).blur(function () {
        CheckError(name);
    });

    $(email).blur(function () {
        CheckErrorRegex(email, emailRegex);
    });

    $(phone).blur(function () {
        CheckError(phone);
    });

    $(subject).blur(function () {
        CheckError(subject);
    });

    $(message).blur(function () {
        CheckError(message);
    });

    $(button).click(function () {

        try {
            if (name.val() !== "" && email.val() !== "" && phone.val() !== "" && subject.val() !== "" && message.val() !== "") {

                var formData = {
                    fullname: name.val(),
                    email: email.val(),
                    phone: phone.val(),
                    subject: subject.val(),
                    message: message.val()
                }

                $.ajax({
                    type: 'POST',
                    url: 'https://cameronliddell.com/php/contactform.php',
                    data: formData,
                    success: function (response) {

                        if (response.trim() == "success") {

                            console.log("response:", response)

                            btnText.innerHTML = "Thanks";
                            btn.classList.add("active");

                            $(name).prop("disabled", true).css("opacity", 0.7);
                            $(email).prop("disabled", true).css("opacity", 0.7);
                            $(phone).prop("disabled", true).css("opacity", 0.7);
                            $(subject).prop("disabled", true).css("opacity", 0.7);
                            $(message).prop("disabled", true).css("opacity", 0.7);
                            $(button).prop("disabled", true).css("opacity", 0.7);
                        }else{
                            console.error("success fail: ", response)
                            window.location.href = "error.html"
                        }
                    },

                    error: function (xhr, status, errorPost) {

                        console.error("Ajax error ", errorPost);
                        window.location.href = "error.html"
                    }
                });
            } else {

                $(button).animate({ left: '-10px' }, 50)
                    .animate({ left: '10px' }, 50)
                    .animate({ left: '0px' }, 50)
                    .animate({ left: '-10px' }, 50)
                    .animate({ left: '0px' }, 50);

            }

        } catch (error) {
            $(button).animate({ left: '-10px' }, 50)
                .animate({ left: '10px' }, 50)
                .animate({ left: '0px' }, 50)
                .animate({ left: '-10px' }, 50)
                .animate({ left: '0px' }, 50);

            console.success("Error: ", error);
        }
    });

});