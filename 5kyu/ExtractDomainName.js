function domainName(url) {
  let str = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/)[0];
  let domain = str.split(".")[0];
  return domain;
}
