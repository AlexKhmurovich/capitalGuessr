window.onload = function () {
  google.accounts.id.initialize({
    client_id: "clientid.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.prompt((notification) => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      console.log("opted out");
    }
  });

  function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
  };

  function handleCredentialResponse(response) {
 //console.log(response)

  console.log(JSON.stringify(parseJwt(response.credential)));
}