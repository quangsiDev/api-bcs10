/**
 * đồng bộ, bất đồng bộ
 *
 * đồng bộ chạy hết => bất đồng bộ chạy tiếp
 */

setTimeout(function () {
  console.log("bật quảng cáo");
}, 0);
// 1000 ~ 1s
console.log(2);
console.log(1);

// axios ~ pedding,  resolve ( success ), reject ( error )

axios({
  url: "https://api.tiki.vn/raiden/v2/menu-config?platform=desktop",
  method: "GET",
})
  .then(function (res) {
    console.log("😀 - res", res.data.menu_block.items);
  })
  .catch(function (err) {
    console.log("😀 - err", err);
  });
