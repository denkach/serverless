

class MyServerlessExtension {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {
      mycommand: {
        usage: "Custom command usage",
        lifecycleEvents: ["event1", "event2"],
        options: {
          option1: {
            usage: "Custom option 1 usage",
            shortcut: "o",
            required: true,
          },
          option2: {
            usage: "Custom option 2 usage",
            shortcut: "t",
            required: false,
          },
        },
      },
    };

    this.hooks = {
      "mycommand:event1": this.event1.bind(this),
      "mycommand:event2": this.event2.bind(this),
    };
  }

  event1() {
    this.serverless.cli.log("Executing event1");
    // Add your custom logic for event1 here
  }

  event2() {
    this.serverless.cli.log("Executing event2");
    // Add your custom logic for event2 here
  }
}

module.exports = MyServerlessExtension;
