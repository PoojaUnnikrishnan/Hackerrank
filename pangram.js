function pangram(str) {
  let arr = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  for (let i = 0; i < str.length; i++) {
    if (str(i) === arr[i]) {
      console.log("pangram");
    } else str(i) != arr[i];
    {
      console.log("not pangram");
    }
  }
}
pangram("ssdcdfvdgtggrgfnhjkkoilofdasasa");
