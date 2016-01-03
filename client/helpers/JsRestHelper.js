function makeAjaxRequest(method, path, body, callback) {
  var request = new XMLHttpRequest();

  request.open(method.toUpperCase(), path, true);
  request.setRequestHeader('Accept', 'application/json');

  request.onreadystatechange = function () {
    // 4 = Request finished and response is ready.
    // Ignore everything else.
    if (request.readyState !== 4) {
      return;
    }

    var result = {
      status: request.status,
      responseJSON: null
    };

    try {
      if (request.responseText) {
        result.responseJSON = JSON.parse(request.responseText);
      }
      callback(null, result);
    } catch (e) {
      callback(e);
    }
  };

  if (body !== undefined) {
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(JSON.stringify(body));
  }
}

function _makeRequest(method, path, body, callback) {
  makeAjaxRequest(method, path, body, function (err, result) {
    if (err) {
      return callback(err);
    }

    var data = result.responseJSON || {};

    if (result.status === 200) {
      callback(null, data);
    } else {
      callback(new Error(data.error || 'Invalid request.'));
    }
  });
}

module.exports = {
  makeRequest: _makeRequest
}
