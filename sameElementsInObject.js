function getCount(objects) {
  return objects.filter(function (o) {
    console.log(o.x == o.y);
  }).length;
}
getCount({});
