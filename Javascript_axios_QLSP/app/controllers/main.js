/**
 *
 GET : lấy danh sách / lấy chi tiết
 POST : tạo mới
 PUT: cập nhật
 DELETE: xoá

 */

function renderListProduct(productArr) {
  var contentHTML = "";
  productArr.forEach(function (item, index) {
    var trString = `<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.img}</td>
                    <td>${item.desc}</td>
                    <td>
                            <button
                            onclick='deleteProduct(${item.id})'
                            class='btn btn-danger'>Delete</button>
                            <button class='btn btn-warning'>Edit</button>
                    </td>
                 </tr>`;
    contentHTML += trString;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}
function fetchListProduct() {
  axios({
    url: "https://643a58ee90cd4ba563f77786.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      console.log(res);
      renderListProduct(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
fetchListProduct();
function deleteProduct(id) {
  axios({
    url: `https://643a58ee90cd4ba563f77786.mockapi.io/product/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      // gọi lại api lấy danh sách product sau khi xoá thành công
      fetchListProduct();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
