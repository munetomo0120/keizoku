$(function () {
  function buildPost(comment) {
    if (comment.image) {
      let html = `<tr>
                  <td width="35px">
                  ${comment.id}
                  </td>
                  <td width="100px">
                  <a href="/users/${comment.user_id}">${comment.user_name}
                  </a></td>
                  <td width="200px">
                  ${comment.text}
                  </td>
                  <td>
                  <img src="${comment.image}">
                  </td>
                  <td>
                  <time>${comment.created_at}</time>
                  </td>
                  <td witdh="80px">
                  <a data-confirm="削除しますか？" rel="nofollow" data-method="delete" href="/posts/${comment.post_id}/comments/${comment.id}">削除
                  </a></td>
                  </tr>`
      return html;
      
    } else {
      let html = `<tr>
                  <td width="35px">
                  ${comment.id}
                  </td>
                  <td width="100px">
                  <a href="/users/${comment.user_id}">${comment.user_name}
                  </a></td>
                  <td width="200px">
                  ${comment.text}
                  </td>
                  <td>
                  </td>
                  <td>
                  <time>${comment.created_at}</time>
                  </td>
                  <td witdh="80px">
                  <a data-confirm="削除しますか？" rel="nofollow" data-method="delete" href="/posts/${comment.post_id}/comments/${comment.id}">削除
                  </a></td>
                  </tr>`
      return html;

    }
  }

  $('#new_comment').on('submit', function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (comment) {
      let html = buildPost(comment)
      console.log(html)
      $('.new_comment').append(html)
      $('.textbox').val('');
      $('.imagebox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});