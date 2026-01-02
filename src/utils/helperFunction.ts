export function formatTime(time: string) {
  if (!time) return "";
  const [h, m] = time.split(":");
  const hour = Number(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${m} ${ampm}`;
}

export type Payload = {
  name: string;
  cuisine: string[];
  img: string | null;

  address: string;
  contact: string;
  email: string;

  hours: Record<
    string,
    {
      open: string;
      close: string;
    }
  >;

  bank_name: string;
  account_number: string;
  account_type: string | null;
  routing_number: string;
};

export const isTab1Valid = (data: Payload) => {
  return (
    data.name?.trim().length > 0 &&
    data.cuisine?.length > 0 &&
    Boolean(data.img)
  );
};

export const isTab2Valid = (data: Payload) => {
  return (
    data.address?.trim().length > 0 &&
    data.contact?.trim().length > 0 &&
    data.email?.includes("@")
  );
};

export const isTab3Valid = (data: Payload) => {
  if (!data.hours) return false;

  return Object.values(data.hours).every((day) => day.open && day.close);
};

export const isTab4Valid = (data: Payload) => {
  return (
    Boolean(data.bank_name?.trim()) &&
    Boolean(data.account_number?.trim()) &&
    Boolean(data.account_type?.trim()) &&
    Boolean(data.routing_number?.trim())
  );
};
