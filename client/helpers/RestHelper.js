import $ from 'jquery';

module.exports = {
  get(url) {
    return new Promise(function callback(success, error) {
      $.ajax({
        url: url,
        dataType: 'json',
        success,
        error
      });
    });
  },
  postJSON(url, data) {
    return new Promise(function callback(success, error) {
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success,
        error
      });
    });
  },
  del(url) {
    return new Promise(function callback(success, error) {
      $.ajax({
        url: url,
        type: 'DELETE',
        success,
        error
      });
    });
  },
  post(url, data) {
    return new Promise(function callback(success, error) {
      $.ajax({
        url,
        type: 'POST',
        data,
        success,
        error
      });
    });
  },
  patch(url, data) {
    return new Promise(function callback(success, error) {
      $.ajax({
        url,
        type: 'PATCH',
        data,
        success,
        error
      });
    });
  }
};
