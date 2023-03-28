var brandV, codeV, nameV, scontactV, cityV, smanagerV, smanagernameV, asmanagerV, asmanagernameV, amanagerV, amanagernameV, teamviewerV, anydeskV, posidV, poscodeV, emailV, saddressV;



const domains = ["eastgateretail.com"];

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value.trim();

  if (emailValue.includes("@")) {
    const domain = emailValue.split("@").pop();

    const matchingDomain = domains.find((item) =>
      item.includes(domain)
    );

    if (matchingDomain) {
      emailInput.value = emailValue.slice(
        0,
        emailValue.lastIndexOf("@") + 1
      ) + matchingDomain;
    } else {
      // Display an error message or clear the input value
      emailInput.value = "";
    }
  }
});
document.addEventListener("keydown", e => {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V')) {
    // Allow CTRL + C and CTRL + P shortcut keys
    return true;
  } else if (e.ctrlKey) {
    // Block all other CTRL shortcut keys
    e.preventDefault();
    return false;
  }
});
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12 button
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 123) {
    e.preventDefault();
  }
});
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
  const databaseRef = firebase.database().ref("shopinfo/" + (brandV + codeV));
  databaseRef.once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("select_brand").value = snapshot.val().selectbrand;
        document.getElementById("selectstore_code").value = snapshot.val().selectstorecode;
        document.getElementById("computer_name").value = snapshot.val().computername;
        document.getElementById("shop_contact").value = snapshot.val().shopcontact;
        document.getElementById("city").value = snapshot.val().city;
        document.getElementById("shop_manager").value = snapshot.val().shopmanager;
        document.getElementById("shop_manager_name").value = snapshot.val().shopmanagername;
        document.getElementById("asst_shopmanager").value = snapshot.val().asstshopmanager;
        document.getElementById("asst_shopmanager_name").value = snapshot.val().asstshopmanagername;
        document.getElementById("area_manager").value = snapshot.val().areamanager;
        document.getElementById("area_manager_name").value = snapshot.val().areamanagername;
        document.getElementById("team_viewer").value = snapshot.val().teamviewer;
        document.getElementById("any_desk").value = snapshot.val().anydesk;
        document.getElementById("pos_id").value = snapshot.val().posid;
        document.getElementById("pos_code").value = snapshot.val().poscode;
        document.getElementById("email").value = snapshot.val().email;
        document.getElementById("shop_address").value = snapshot.val().shopaddress;
      } else if (brandV && codeV === "") {
        alert("Brand and store code mandatory")
      }
      else {
        alert("Record does not exist in the database Please enter valid code");
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
      }

    })
    .catch((error) => {
      console.error(error);
    });
};

document.getElementById("insert").onclick = function () {

  brandV = document.getElementById("select_brand").value;
  if (brandV == "brand") {
    alert("Brand  must be filled out");
    return false;
  }
  codeV = document.getElementById("selectstore_code").value;
  if (codeV == "") {
    alert("Store Code must be filled out");
    return false;
  }
  if (!/^\d+$/.test(codeV)) {
    alert("Store code must in Numbers");
    return false;
  }
  nameV = document.getElementById("computer_name").value;
  const nameRegex = /^[a-zA-Z_-]+$/;
  if (nameRegex.test(nameV)) {
  } else {
    alert("computer name must be alphabetical letters.");
  }
  scontactV = document.getElementById("shop_contact").value;
  // if (!/^\d+$/.test(scontactV)) {
  //   alert("shop contact contain only numbers");
  //   return false;
  // }
  cityV = document.getElementById("city").value;
  smanagerV = document.getElementById("shop_manager").value;
  // if (!/^\d+$/.test(smanagerV)) {
  //   alert("manager contact contain only numbers");
  //   return false;
  // }
  smanagernameV = document.getElementById("shop_manager_name").value;
  asmanagerV = document.getElementById("asst_shopmanager").value;
  // if (!/^\d+$/.test(asmanagerV)) {
  //   alert("asst shop manager contact contain only numbers");
  //   return false;
  // }
  asmanagernameV = document.getElementById("asst_shopmanager_name").value;
  amanagerV = document.getElementById("area_manager").value;
  // if (!/^\d+$/.test(amanagerV)) {
  //   alert("area manager contact contain only numbers");
  //   return false;
  // }
  amanagernameV = document.getElementById("area_manager_name").value;
  teamviewerV = document.getElementById("team_viewer").value;
  // if (!/^\d+$/.test(teamviewerV)) {
  //   alert("teamviewer have only numbers");
  //   return false;
  // }
  anydeskV = document.getElementById("any_desk").value;
  // if (!/^\d+$/.test(anydeskV)) {
  //   alert("anydesk have only numbers");
  //   return false;
  // }/^[a-zA-Z_-]+$/
  posidV = document.getElementById("pos_id").value;
  // if (/^\d+$/.test(posidV)) {
  //   alert("PosId have only numbers");
  //   return false;
  // }
  poscodeV = document.getElementById("pos_code").value;
  emailV = document.getElementById("email").value;
  // Check for valid email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailV)) {
    alert("Invalid email address");
    return false;
  }
  saddressV = document.getElementById("shop_address").value;
  if (saddressV === "") {
    alert("Shop Address is mandatory");
    return false;
  } else {

  }
  // console.log(brandV, codeV, nameV, scontactV, smanagerV, smanagernameV, asmanagerV, asmanagernameV, amanagerV, amanagernameV, emailV, saddressV,teamviewerV
  // );

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
    alert("Update Error  ! Brand and Store code required for Update data ");
  }

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
    alert("Brand and Store code required for Delete data !");
  }


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
