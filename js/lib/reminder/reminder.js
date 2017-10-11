const notifier = require('node-notifier');

class Reminder {
  constructor({title = "New Reminder", date = "1/1/1970", hour = "12", minute="00", period="AM"}) {
    this.title = title;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
    this.period = period;
    this.formattedDateTime = `${this.date} ${this.hour}:${this.minute}:00 ${this.period}`;
    this.dateTimeMillis = Date.parse(this.formattedDateTime);
    this.timeout = null;
    this.json = {
      title: this.title,
      date: this.date,
      hour: this.hour,
      minute: this.minute,
      period: this.period,
      formattedDateTime: this.formattedDateTime,
      dateTimeMillis: this.dateTimeMillis
    };
  }

  startWait() {
    return new Promise((resolve, reject) => {
      let delay = this.dateTimeMillis - Date.now();
      if (delay >= 0) {
        this.timeout = setTimeout(() => {
          let notification = new Notification("Reminder:", {
            body: this.title
          });
        }, delay);
      }
    });
  }

  cancel() {
    if (this.timeout) clearTimeout(this.timeout);
  }
}

module.exports = Reminder;
