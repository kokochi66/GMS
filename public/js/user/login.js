$('.login_form').keypress((event) => {
    if(event.which == 13) {
    submitPost()
    }
})
$('.login_btn').click(() => {
    submitPost()
});

function submitPost() {
    let id = $('.login_id').val()
    let pwd = $('.login_pwd').val()
    //Ajax POST Method TEST
    $.ajax({
        url: '/login',
        dataType: 'json',
        type: 'POST',
        data: {id:id, pwd:pwd},
        success: (result) => {
            if (result) {
            if(result.res === 'success') {
                alert('로그인에 성공하였습니다.')
                location.href ='/';
            } else if(result.res === 'fault') {
                alert('로그인에 실패하였습니다.')
            }
            } 
        },
        error: (xhr, status) => {
            alert(xhr +" : "+status)
        }
        });
}