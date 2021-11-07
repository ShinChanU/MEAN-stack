// 브라우저에서 유효성 검사
// 사용자가 같은 페이지에 머물면서 에러 발견
// 제이쿼리를 사용

$('#addReview').submit(function (e) {
  $('.alert.alert-danger').hide();
  if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
    if ($('.alert.alert-danger').length) {
      $('.alert.alert-danger').show();
    } else {
      $(this).prepend('<div role="alert" class="alert alert-danger">All fields required, \
      please try again</div>');
    }
    return false;
  }
});