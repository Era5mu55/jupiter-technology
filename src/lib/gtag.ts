declare global {
  interface Window {
    gtagSendEvent?: (url?: string) => boolean;
  }
}

export function fireSignUpConversion(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtagSendEvent === "function") {
    window.gtagSendEvent(url);
  }
}
