interface TopSellingProp {
  img: string;
  name: string;
  price: string;
}

export default function TopSelling({ img, name, price }: TopSellingProp) {
  return (
    <div className="text-[#454545] font-semibold flex items-center justify-between gap-6.75">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="top selling"
          />
        </div>
        <p>{name}</p>
      </div>
      <p>{price}</p>
    </div>
  );
}
