// This script should be included in the head of your HTML file

function preventClickjacking() {
  if (self === top) {
    // The current window is the top-level window, not embedded in an iframe
  } else {
    // The current window is embedded in an iframe, break out of the frame
    top.location = self.location;
  }
}

// Call the function to prevent clickjacking when the script is loaded
preventClickjacking();
