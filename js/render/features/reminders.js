(function() {
  const fs = require('fs'),
        {ipcRenderer} = require('electron'),
        {Reminder} = require(`${__dirname}/../js/lib/reminder`);

  let $remindersList = $('#reminders'),
      reminders = require(`../js/data/reminders`),
      $addReminderButton = $('#add-reminder');

  renderReminders(reminders);

  $addReminderButton.click(() => {
    $addReminderButton.prop("disabled", true);
    $remindersList.append(
  `<li class="reminder">
      <form>
        <input class="title" type="text" value="New Reminder">
        <input class="datepicker" type="text">
        <span class="valid-date-time-label"></span>
      </form>
      <select class="hour">
        ${getNumOptions(1, 12)}
      </select>
      <span id="hour-minute-colon"></span>
      <select class="minute">
        ${getNumOptions(0, 59, formatMinute)}
      </select>
      <select class="period">
        <option>AM</option>
        <option>PM</option>
      </select>
    <button class="set-reminder">Set</button>
    <button class="remove-reminder">Remove</button>
    </li>`)
    .find('.set-reminder')
    .click(function() {
      setReminder(reminders, $($(this).parent()));
    })
    .parent()
    .find('.remove-reminder')
    .click(function() {
      removeReminder(reminders, $($(this).parent()));
    })
    .parent()
    .find('.datepicker')
    .datepicker();
  });

  function renderReminders(reminders) {
    $remindersList.html("");
    reminders.reminders.forEach((reminder, i) => {
      $remindersList.append(
      `<li class="reminder">
        <form>
          <input class="title" type="text" value="${reminder.title}" disabled>
          <input class="datepicker" type="text" value="${reminder.date}" disabled>
          <span class="valid-date-time-label"></span>
        </form>
        <select class="hour" disabled>
          ${getNumOptions(1, 12)}
        </select>
        <span id="hour-minute-colon"></span>
        <select class="minute" disabled>
          ${getNumOptions(0, 59, formatMinute)}
        </select>
        <select class="period" disabled>
          <option ${reminder.period === 'AM' ? 'selected' : ''}>AM</option>
          <option ${reminder.period === 'PM' ? 'selected' : ''}>PM</option>
        </select>
      <button class="remove-reminder">Remove</button>
      </li>`)
      .find('.remove-reminder')
      .click(function() {
        removeReminder(reminders, $($(this).parent()));
      })
      .parent()
      .last()
      .find('select.hour')
      .val(reminder.hour)
      .parent()
      .find('select.minute')
      .val(reminder.minute)
      .parent()
      .find('select.period')
      .val(reminder.period)
      .parent()
      .find('.datepicker')
      .datepicker();
    });
  }

  function setReminder(reminders, $reminder) {
    let reminder = new Reminder({
      title: $reminder.find(`input.title`).val(),
      date: $reminder.find(`input.datepicker`).val(),
      hour: $reminder.find(`select.hour`).val(),
      minute: $reminder.find(`select.minute`).val(),
      period: $reminder.find(`select.period`).val()
    });
    let $validDateTimeLabel = $reminder.find('.valid-date-time-label');
    if (reminder.date && Date.parse(reminder.date) && reminder.dateTimeMillis >= Date.now()) {
      $validDateTimeLabel.html('');
      if (reminders[$reminder.index()]) {
        reminders[$reminder.index()] = reminder;
      } else {
        reminders.reminders.push(reminder);
      }
      reminders.save();
      let date = new Date(Date.parse(reminder.date));
      $addReminderButton.prop("disabled", false);
      $reminder.find('.set-reminder').remove();
      $reminder.find('.title').prop('disabled', true);
      $reminder.find('.datepicker').prop('disabled', true);
      $reminder.find('.hour').prop('disabled', true);
      $reminder.find('.minute').prop('disabled', true);
      $reminder.find('.period').prop('disabled', true);
      ipcRenderer.send('start-reminder-wait', reminders.reminders[reminders.reminders.length - 1]);
    } else {
      $validDateTimeLabel.html('Invalid Date/Time.');
    }
  }

  function removeReminder(reminders, $reminder) {
    let reminderIndex = $reminder.index(),
        reminder = reminders.reminders[reminderIndex];
    if (reminder) {
      reminders.remove(reminderIndex);
    }
    $reminder.remove();
    reminders.save();
    if ($addReminderButton.prop("disabled")) {
      $addReminderButton.prop("disabled", false);
    }
  }

  function getNumOptions(start, end, map = num => `${num}`) {
    let options = '';
    for (let i = start; i <= end; i++) {
      options += `<option>${map(i)}</option>`
    }
    return options;
  }

  function formatMinute(num) {
    if (num < 10) return `0${num}`
    else return `${num}`;
  }

  // function saveReminders(reminders, path = './data/reminders.json') {
  //   let updatedReminders = reminders.reminders.filter(reminder => {
  //     return reminder.dateTimeMillis - Date.now() >= 0;
  //   }).map(reminder => {
  //     return reminder.json;
  //   });
  //   fs.writeFileSync(path, JSON.stringify(updatedReminders));
  // }
})();
