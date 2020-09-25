export function contactPost() {
    const body = { name, email, subject, message } = this.params;
    if (!name || !email || !subject || !message) {
        $('.alert-danger').show('fast').text('All fields are required');
        setTimeout(() => {
            $('.alert-danger').hide('fast')
        }, 1500);
        // return;
    }
    $('button').attr('disabled', true);
    $('.form-control').each(function () {
        $(this).val('');
    });
    $('#c-count').text('0/500');
    $('.alert-info').show();

    fetch('https://us-central1-toma-iliev.cloudfunctions.net/sendEmail', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
        .then(res => res.json())
        .then(data => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            if (!data.messageId) {
                throw new Error(data.message);
            } else {
                $('.alert-success').show();
                setTimeout(() => {
                    $('.alert-success').hide('fast')
                }, 1500);   
            }
        }).catch(err => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            $('.alert-danger').show().text(err);
            setTimeout(() => {
                $('.alert-danger').hide('fast')
            }, 1500);
        });
}