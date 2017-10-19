const fs = require('fs');

class Settings {
  constructor(path, settings = []) {
    this.settings = settings;
    this.default = settings;
    this.path = path;
  }

  save(path = this.path) {
    fs.writeFileSync(this.path, JSON.stringify(this.settings));
  }

  reset(save = false, path = this.path) {
    this.settings = this.default;
    if (save) {
      this.save(path);
    }
  }

  getSaved(path = this.path) {
    let settings = [];
    try {
      settings = JSON.parse(fs.readFileSync(path));
    } catch(err) {
      console.error(`Failed to parse settings!\n${err.stack}`);
    }

    return settings;
  }

  load(path = this.path) {
    this.settings = this.getSaved(path);
  }
}

module.exports = Settings;
