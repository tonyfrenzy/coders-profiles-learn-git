var profilesCount = function () {
  var profiles = document.querySelectorAll('dl.personProfile');
  var profilesCount = profiles.length;
  console.log(profilesCount);
	var profilesCountDisplay = document.getElementById('profilesCount');
	profilesCountDisplay.innerText = profilesCount;
}

var hideClearModal = function () {
  newProfileModal.style.display = "none";
  document.getElementById("newProfile").reset();
}

profilesCount();

/**
* Modal related
*/
var newProfileModal = document.getElementById("newProfileModal");
var newProfileBtn = document.getElementById("newProfileBtn");
var profileName = document.getElementById("profileName");
var profileGithub = document.getElementById("profileGithub");
var profileLinkedIn = document.getElementById("profileLinkedIn");
var profileTwitter = document.getElementById("profileTwitter");
var profileBio = document.getElementById("profileBio");
var profileImgSource = document.getElementById("profileImgSource");
var profileBioHTML = document.getElementById("profileBioHTML");
var pBioCopy = document.getElementById("pBioCopy");
var requiredFieldsAlert = document.getElementById("requiredFieldsAlert");
var span = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementById("cancelBtn");

//create new profile
  newProfileBtn.onclick = function() {
  newProfileModal.style.display = "block";

  // Pre-populate for easier form filling
  profileGithub.placeholder = "https://github.com/---username";
  profileLinkedIn.placeholder = "https://www.linkedin.com/in/---username-id";
  profileTwitter.placeholder = "https://twitter.com/---username";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  newProfileModal.style.display = "none";
  document.getElementById("newProfile").reset();
}

//Close modal using the close button
cancelBtn.onclick = function(event) {
  event.preventDefault();
  hideClearModal();
}
/** -- end Modal related -- */

//Impliment filling form within modal
addBtn.onclick = function(event) {
    event.preventDefault();

    var newProfile = document.createElement("dl");
    var profileNameNode = document.createElement("dt");
    var profileGithubNode = document.createElement("dd");
    var profileGhNodeStrong = document.createElement("strong");
    var profileGhNodeSpan = document.createElement("span");
    var profileGhNodeA = document.createElement("a");

    var profileLinkedInNode = document.createElement("dd");
    var profileLinkedInNodeStrong = document.createElement("strong");
    var profileLinkedInNodeSpan = document.createElement("span");
    var profileLinkedInNodeA = document.createElement("a");

    var profileTwitterNode = document.createElement("dd");
    var profileTwitterNodeStrong = document.createElement("strong");
    var profileTwitterNodeSpan = document.createElement("span");
    var profileTwitterNodeA = document.createElement("a");

    var profileImageNode = document.createElement("dd");
    var profileImageTagNode = document.createElement("img");

    var profileBioNode = document.createElement("dd");
    var profileBioNodeStrong = document.createElement("strong");
    var profileBioNodeSpan = document.createElement("span");

  // Construct profile HTML
    newProfile.classList.add('personProfile');
    newProfile.appendChild(profileNameNode);
    newProfile.appendChild(profileGithubNode);
  	profileGithubNode.appendChild(profileGhNodeStrong);// <dd><strong>Github:</strong>
    profileGithubNode.appendChild(profileGhNodeSpan);  //     <span>
    profileGhNodeSpan.appendChild(profileGhNodeA);     //     <a></a></span></dd>

    newProfile.appendChild(profileLinkedInNode);
    profileLinkedInNode.appendChild(profileLinkedInNodeStrong);// <dd><strong>LinkedIn:</strong>
    profileLinkedInNode.appendChild(profileLinkedInNodeSpan);  //     <span>
    profileLinkedInNodeSpan.appendChild(profileLinkedInNodeA); //     <a></a></span></dd>

    newProfile.appendChild(profileTwitterNode);
    profileTwitterNode.appendChild(profileTwitterNodeStrong);// <dd><strong>Twitter:</strong>
    profileTwitterNode.appendChild(profileTwitterNodeSpan);  //     <span>
    profileTwitterNodeSpan.appendChild(profileTwitterNodeA); //     <a></a></span></dd>

    newProfile.appendChild(profileBioNode);
    profileBioNode.appendChild(profileBioNodeStrong);// <dd><strong>Bio:</strong>
    profileBioNode.appendChild(profileBioNodeSpan);  //     <span></span></dd>

    newProfile.appendChild(profileImageNode);
    profileImageNode.appendChild(profileImageTagNode);// <dd><img /></dd>
  
    if (profileName.value == "" || profileGithub.value == "https://github.com/---username") {
      requiredFieldsAlert.style.display = "block";
    } else {
  // clear model unfilled form alert
      requiredFieldsAlert.style.display = "none";

  // Populate profile HTML with extracted data
      profileNameNode.innerText = profileName.value;
      profileGhNodeStrong.innerText = 'Github :';
      profileGhNodeA.href = profileGithub.value;
      profileGhNodeA.innerText = profileGithub.value;
      profileGhNodeA.target = '_blank';

      profileLinkedInNodeStrong.innerText = 'LinkedIn :';
      profileLinkedInNodeA.href = profileLinkedIn.value;
      profileLinkedInNodeA.innerText = profileLinkedIn.value;
      profileLinkedInNodeA.target = '_blank';

      profileTwitterNodeStrong.innerText = 'Twitter :';
      profileTwitterNodeA.href = profileTwitter.value;
      profileTwitterNodeA.innerText = profileTwitter.value;
      profileTwitterNodeA.target = '_blank';

      profileImageTagNode.src = profileImgSource.value;

      profileBioNodeStrong.innerText = 'Bio :';
      profileBioNodeSpan.innerText = profileBio.value;

      console.log(newProfile);
      profileBioHTML.value = (newProfile.innerHTML);

      var profiles = document.getElementById("profiles");
      var fChild = profiles.firstChild;
      profiles.insertBefore(newProfile, fChild);

    // Update profiles count
      profilesCount();

    // Clear form and hide modal.
      hideClearModal();

      pBioCopy.style.display = "block";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == newProfileModal) {
    newProfileModal.style.display = "none";
  }
}
