import { Meteor } from "meteor/meteor";
import helmet from "helmet";

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        connectSrc: ["*"],
        imgSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        //frameSrc: ["player.vimeo.com"]
      }
    })
  );
});
