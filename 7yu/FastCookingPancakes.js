function cookPancakes(n, m) {
  const time = n / m;

  if (time < 1) {
    return 2;
  } else {
    return Math.ceil(time * 2);
  }
}
