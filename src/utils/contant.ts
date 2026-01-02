import type { Message } from "../components/ChatBox";

export const bank = [
  { label: "Savings", value: "savings" },
  { label: "Checking", value: "checking" },
  { label: "Current", value: "current" },
  { label: "Business", value: "business" },
  { label: "Fixed Deposit", value: "fixed deposit" },
  { label: "Joint Account", value: "joint account" },
  { label: "Other", value: "other" },
];

export const cuisineTypes = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Mexican", value: "mexican" },
  { label: "Fast Food", value: "fast food" },
  { label: "Alcohol", value: "alcohol" },
  { label: "Kids Menu", value: "kids menu" },
  { label: "Sea Food", value: "sea food" },
  { label: "Desserts", value: "desserts" },
  { label: "African", value: "african" },
  { label: "Chinese", value: "chinese" },
  { label: "Italian", value: "italian" },
  { label: "Japanese", value: "japanese" },
  { label: "Indian", value: "indian" },
  { label: "Thai", value: "thai" },
  { label: "Middle Eastern", value: "middle eastern" },
  { label: "BBQ", value: "bbq" },
  { label: "Coffee", value: "coffee" },
  { label: "Vegan", value: "vegan" },
  { label: "Halal", value: "halal" },
];

export const messages: Message[] = [
  {
    id: 1,
    sender: "customer",
    name: "Nwachukwu Kene",
    message:
      "Hi, my order was missing the garlic bread that I paid for. Please help.",
    time: "16:20",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  },
  {
    id: 2,
    sender: "admin",
    name: "McDonalds",
    message:
      "Hi Kenechukwu, thank you for reaching out. We’re sorry about this issue and will look into it immediately.",
    time: "16:21",
  },
  {
    id: 3,
    sender: "customer",
    name: "Nwachukwu Kene",
    message: "Thank you. Please let me know once you’ve checked.",
    time: "16:22",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  },
  {
    id: 4,
    sender: "admin",
    name: "McDonalds",
    message:
      "We’ve reviewed your order and confirmed that the garlic bread was not included due to a temporary stockout. We sincerely apologize for the inconvenience caused.",
    time: "16:24",
  },
  {
    id: 5,
    sender: "admin",
    name: "McDonalds",
    message:
      "Would you prefer a refund for the missing item, or would you like us to send a replacement with your next order?",
    time: "16:26",
  },
  {
    id: 6,
    sender: "customer",
    name: "Nwachukwu Kene",
    message:
      "Please go ahead and issue a refund. Thank you for the quick response.",
    time: "16:27",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  },
];
