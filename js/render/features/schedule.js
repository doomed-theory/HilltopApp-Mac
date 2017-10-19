(function() {
  const fs = require('fs');

  let $scheduleItemTitles = $('.schedule-item-title'),
      $changeScheduleTitleButtons = $('.change-schedule-title'),
      schedule = JSON.parse(fs.readFileSync("./data/schedule.json"));

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
    fs.writeFileSync("./data/schedule.json", JSON.stringify(schedule));
  });
})();
