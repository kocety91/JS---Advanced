function validator(inputObj) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  let versions = ["HTTP/0.9", "HTTP/1.1", "HTTP/2.0"];

  if (!methods.includes(inputObj.method)) {
    throw Error("Invalid request header: Invalid Method");
  }

  let path = /^[.a-z0-9]+$/;
  if (inputObj.uri == undefined || !inputObj.uri.match(path)) {
    throw Error("Invalid request header: Invalid uri");
  }

  if (!versions.includes(inputObj.version)) {
    throw Error("Invalid request header: Invalid Version");
  }

  let path2 = /[^<, >, \, &, ', \s"]/;
  if (!inputObj.message.match(path2) && inputObj.message !== "") {
    throw Error("Invalid request header: Invalid message");
  }

  return (obj = {
    method: inputObj.method,
    uri: inputObj.uri,
    version: inputObj.version,
    message: inputObj.message,
  });
}
