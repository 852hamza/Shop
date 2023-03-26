var brandV, codeV, nameV, scontactV,cityV, smanagerV, smanagernameV, asmanagerV, asmanagernameV, amanagerV, amanagernameV, teamviewerV, anydeskV, posidV, poscodeV, emailV, saddressV;

function readFom() {

  brandV = document.getElementById("select_brand").value;
  codeV = document.getElementById("selectstore_code").value;
  nameV = document.getElementById("computer_name").value;
  scontactV = document.getElementById("shop_contact").value;
  cityV = document.getElementById("city").value;
  smanagerV = document.getElementById("shop_manager").value;
  smanagernameV = document.getElementById("shop_manager_name").value;
  asmanagerV = document.getElementById("asst_shopmanager").value;
  asmanagernameV = document.getElementById("asst_shopmanager_name").value;
  amanagerV = document.getElementById("area_manager").value;
  amanagernameV = document.getElementById("area_manager_name").value;
  teamviewerV = document.getElementById("team_viewer").value;
  anydeskV = document.getElementById("any_desk").value;
  posidV = document.getElementById("pos_id").value;
  poscodeV = document.getElementById("pos_code").value;
  emailV = document.getElementById("email").value;
  saddressV = document.getElementById("shop_address").value;
  // console.log(brandV, codeV, nameV, scontactV, smanagerV, smanagernameV, asmanagerV, asmanagernameV, amanagerV, amanagernameV, emailV, saddressV,teamviewerV
  // );
}



document.getElementById("read").onclick = function () {
  readFom();
  if (codeV && brandV) {
    firebase
      .database()
      .ref("shopinfo/" + (brandV + codeV))
      .on("value", function (snap) {
        document.getElementById("select_brand").value = snap.val().selectbrand;
        document.getElementById("selectstore_code").value = snap.val().selectstorecode;
        document.getElementById("computer_name").value = snap.val().computername;
        document.getElementById("shop_contact").value = snap.val().shopcontact;
        document.getElementById("city").value = snap.val().city;
        document.getElementById("shop_manager").value = snap.val().shopmanager;
        document.getElementById("shop_manager_name").value = snap.val().shopmanagername;
        document.getElementById("asst_shopmanager").value = snap.val().asstshopmanager;
        document.getElementById("asst_shopmanager_name").value = snap.val().asstshopmanagername;
        document.getElementById("area_manager").value = snap.val().areamanager;
        document.getElementById("area_manager_name").value = snap.val().areamanagername;
        document.getElementById("team_viewer").value = snap.val().teamviewer;
        document.getElementById("any_desk").value = snap.val().anydesk;
        document.getElementById("pos_id").value = snap.val().posid;
        document.getElementById("pos_code").value = snap.val().poscode;
        document.getElementById("email").value = snap.val().email;
        document.getElementById("shop_address").value = snap.val().shopaddress;
      });
  } else {
    alert("First enter brand or store code then read data !");
  }
};
document.getElementById("insert").onclick = function () {
  readFom();
  if (codeV && brandV) {
    firebase
      .database()
      .ref("shopinfo/" + (brandV + codeV))
      .set({
        selectbrand: brandV,
        selectstorecode: codeV,
        computername: nameV,
        shopcontact: scontactV,
        shopmanager: smanagerV,
        city: cityV,
        shopmanagername: smanagernameV,
        asstshopmanager: asmanagerV,
        asstshopmanagername: asmanagernameV,
        areamanager: amanagerV,
        areamanagername: amanagernameV,
        teamviewer: teamviewerV,
        anydesk: anydeskV,
        posid: posidV,
        poscode: poscodeV,
        email: emailV,
        shopaddress: saddressV,
      });
    alert("Data Inserted Successfully into Database");
  } else {
    alert("Data cannot inserted into database! Please enter some brand name or store code");
  }
  document.getElementById("select_brand").value = "";
  document.getElementById("selectstore_code").value = "";
  document.getElementById("computer_name").value = "";
  document.getElementById("shop_contact").value = "";
  document.getElementById("city").value = "";
  document.getElementById("shop_manager").value = "";
  document.getElementById("shop_manager_name").value = "";
  document.getElementById("asst_shopmanager").value = "";
  document.getElementById("asst_shopmanager_name").value = "";
  document.getElementById("area_manager").value = "";
  document.getElementById("area_manager_name").value = "";
  document.getElementById("team_viewer").value = "";
  document.getElementById("any_desk").value = "";
  document.getElementById("pos_id").value = "";
  document.getElementById("pos_code").value = "";
  document.getElementById("email").value = "";
  document.getElementById("shop_address").value = "";
};
document.getElementById("update").onclick = function () {
  readFom();
  if (codeV && brandV) {
    firebase
      .database()
      .ref("shopinfo/" + (brandV + codeV))
      .update({
        computername: nameV,
        shopcontact: scontactV,
        city: cityV,
        shopmanager: smanagerV,
        shopmanagername: smanagernameV,
        asstshopmanager: asmanagerV,
        asstshopmanagername: asmanagernameV,
        areamanager: amanagerV,
        areamanagernanme: amanagernameV,
        teamviewer: teamviewerV,
        anydesk: anydeskV,
        posid: posidV,
        poscode: poscodeV,
        email: emailV,
        shopaddress: saddressV,
      });
    alert("Data Update Successfully into Database");
  } else {
    alert("Data cannot Update Successfully into Database");
  }

  document.getElementById("select_brand").value = "";
  document.getElementById("selectstore_code").value = "";
  document.getElementById("computer_name").value = "";
  document.getElementById("shop_contact").value = "";
  document.getElementById("city").value = "";
  document.getElementById("shop_manager").value = "";
  document.getElementById("shop_manager_name").value = "";
  document.getElementById("asst_shopmanager").value = "";
  document.getElementById("asst_shopmanager_name").value = "";
  document.getElementById("area_manager").value = "";
  document.getElementById("area_manager_name").value = "";
  document.getElementById("team_viewer").value = "";
  document.getElementById("any_desk").value = "";
  document.getElementById("pos_id").value = "";
  document.getElementById("pos_code").value = "";
  document.getElementById("email").value = "";
  document.getElementById("shop_address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();
  if (codeV && brandV) {
    firebase
      .database()
      .ref("shopinfo/" + (brandV + codeV))
      .remove();
    alert("Data Deleted Successfully from Database ");

  } else {
    alert("Please read data from database first !");
  }

  document.getElementById("select_brand").value = "";
  document.getElementById("selectstore_code").value = "";
  document.getElementById("computer_name").value = "";
  document.getElementById("shop_contact").value = "";
  document.getElementById("city").value = "";
  document.getElementById("shop_manager").value = "";
  document.getElementById("shop_manager_name").value = "";
  document.getElementById("asst_shopmanager").value = "";
  document.getElementById("asst_shopmanager_name").value = "";
  document.getElementById("area_manager").value = "";
  document.getElementById("area_manager_name").value = "";
  document.getElementById("team_viewer").value = "";
  document.getElementById("any_desk").value = "";
  document.getElementById("pos_id").value = "";
  document.getElementById("pos_code").value = "";
  document.getElementById("email").value = "";
  document.getElementById("shop_address").value = "";
};
