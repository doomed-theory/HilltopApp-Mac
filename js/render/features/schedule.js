(function() {
  const fs = require('fs');

  let $scheduleItemTitles = $('.schedule-item-title'),
      $changeScheduleTitleButtons = $('.change-schedule-title'),
      schedulePath = `${require('electron').remote.require('electron').app.getPath('appData')}/HillTopApp/schedule.json`,
      schedule = JSON.parse(fs.readFileSync(schedulePath));

  $scheduleItemTitles.each((i, itemTitle) => {
    let $itemTitle = $(itemTitle),
        value = $itemTitle.val();

    if (!value) {
      $itemTitle.val(schedule[i]);
    }
  });

  $changeScheduleTitleButtons.click(function() {
    let $button = $(this);

    schedule[$button.val()] = $($scheduleItemTitles[$button.val()]).val();
    fs.writeFileSync(schedulePath, JSON.stringify(schedule));
  });
})();
