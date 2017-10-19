let settings = require('../data/settings'),
    userType = require('./user-type');

function toggle() {
  $('#user-type form').html(`<input class="user-type-option" type="radio" name="user-type" value="student" ${settings.settings.userType === "student" ? "checked" : ""}><span class="user-type-label">Student</span><br>
  <input class="user-type-option" type="radio" name="user-type" value="parent" ${settings.settings.userType === "parent" ? "checked" : ""}><span class="user-type-label">Parent</span><br>
  <input class="user-type-option" type="radio" name="user-type" value="faculty" ${settings.settings.userType === "faculty" ? "checked" : ""}><span class="user-type-label">Faculty Member</span><br>
</form>`);
  $('#settings-overlay').fadeToggle();
}

module.exports = {
  render: () => {
    $('body').prepend(
      `<div id="settings-overlay" hidden>
        <div id="settings-box">
          <h2 id="settings-title">Settings</h2>
          <div id="user-type" class="setting">
            <h3 class="setting-title">I am a...</h3>
            <form>
              <input class="user-type-option" type="radio" name="user-type" value="student" ${settings.settings.userType === "student" ? "checked" : ""}><span class="user-type-label">Student</span><br>
              <input class="user-type-option" type="radio" name="user-type" value="parent" ${settings.settings.userType === "parent" ? "checked" : ""}><span class="user-type-label">Parent</span><br>
              <input class="user-type-option" type="radio" name="user-type" value="faculty" ${settings.settings.userType === "faculty" ? "checked" : ""}><span class="user-type-label">Faculty Member</span><br>
            </form>
          </div>
          <div id="settings-buttons">
            <button id="save-settings" class="settings-button">OK</button>
            <button id="cancel-setting-changes" class="settings-button">Cancel</button>
          </div>
        </div>
      </div>
      `
    );

    $('#save-settings').on('click', function() {
      settings.settings = {
        userType: $('.user-type-option:checked').val()
      };
      settings.save();
      userType.show();
      toggle();
    });

    $('#cancel-setting-changes').on('click', function() {
      toggle();
    });
  },
  toggle: toggle,
  bindButton: () => {
    $('#settings').on('click', function() {
      toggle();
    });
  }
}
