var brandV, codeV;
function readFom() {

  brandV = document.getElementById("select_brand").value;
  codeV = document.getElementById("selectstore_code").value;
  if (codeV == "") {
    alert("Store Code must be filled out");
    return false;
  }
  if (!/^\d+$/.test(codeV)) {
    alert("Store code must in Numbers");
    return false;
  }
}
document.getElementById("read").onclick = function () {
  readFom();
  if (codeV && brandV) {
    firebase
      .database()
      .ref("shopinfo/" + (brandV + codeV))
      .on("value", function (snap) {
        document.getElementById("fbr_id").value = snap.val().posid;
        document.getElementById("fbr_code").value = snap.val().poscode;
      });
  } else {
    alert("First enter brand or store code then read data !");
  }
};