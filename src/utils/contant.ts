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

export const chartData = {
  Daily: [
    { label: "Mon", value: 12000 },
    { label: "Tue", value: 18000 },
    { label: "Wed", value: 15000 },
    { label: "Thu", value: 22000 },
    { label: "Fri", value: 26000 },
    { label: "Sat", value: 20000 },
    { label: "Sun", value: 28000 },
  ],
  Weekly: [
    { label: "W1", value: 85000 },
    { label: "W2", value: 92000 },
    { label: "W3", value: 78000 },
    { label: "W4", value: 99000 },
  ],
  Monthly: [
    { label: "Jan", value: 30000 },
    { label: "Feb", value: 50000 },
    { label: "Mar", value: 45000 },
    { label: "Apr", value: 75000 },
    { label: "May", value: 32000 },
    { label: "Jun", value: 48000 },
  ],
  Yearly: [
    { label: "Jan", value: 30000 },
    { label: "Feb", value: 50000 },
    { label: "Mar", value: 45000 },
    { label: "Apr", value: 75000 },
    { label: "May", value: 32000 },
    { label: "Jun", value: 48000 },
    { label: "Jul", value: 65000 },
    { label: "Aug", value: 42000 },
    { label: "Sep", value: 23000 },
    { label: "Oct", value: 38000 },
    { label: "Nov", value: 36000 },
    { label: "Dec", value: 78000 },
  ],
};

export const dailyData = [
  { day: "Mon", orders: 170 },
  { day: "Tue", orders: 140 },
  { day: "Wed", orders: 165 },
  { day: "Thu", orders: 150 },
  { day: "Fri", orders: 185 },
  { day: "Sat", orders: 168 },
  { day: "Sun", orders: 180 },
];

export const weeklyData = [
  { day: "Week 1", orders: 820 },
  { day: "Week 2", orders: 910 },
  { day: "Week 3", orders: 860 },
  { day: "Week 4", orders: 940 },
];

export const monthlyData = [
  { day: "Jan", orders: 3200 },
  { day: "Feb", orders: 2800 },
  { day: "Mar", orders: 3500 },
  { day: "Apr", orders: 3900 },
  { day: "May", orders: 4200 },
];
