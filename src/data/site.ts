export const SITE = {
  name: "Jupiter Technology",
  email: "info@jupitertechnology.tech",
  whatsappNumber: "19179620098",
  whatsappMessage: "Hi Jupiter Technology, I'd like to discuss a project",
  address: {
    line1: "839 4th St, Apt 2",
    line2: "Bowling Green, OH 43402",
  },
};

export function whatsappHref(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
