import React from "react";
import ReactGA from "react-ga";

const useAnalyticsTracker = (category="Click") => {
  const eventTracker = (action = "Booking", label = "Clicked on booking link") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsTracker;