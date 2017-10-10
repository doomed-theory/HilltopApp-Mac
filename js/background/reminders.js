function enable(reminder) {
  let delay = reminder.dateTimeMillis - Date.now();
  if (delay >= 0) {
    setTimeout(() => {
      let notification = new Notification('Reminder:', {
        body: reminder.title
      });
    }, delay);
  }
}

module.exports = {
  enable: enable,
  enableAll: function(reminders) {
    reminders.forEach(reminder => {
      enable(reminder);
    });
  }
}
