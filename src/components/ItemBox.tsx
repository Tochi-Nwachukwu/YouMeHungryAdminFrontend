export default function ItemBox() {
  return (
    <div className="lg:px-11.25 border-b border-[#E1E1E1] py-3.25">
      <div className="grid grid-cols-[1.2fr_1fr_0.8fr_0.8fr] lg:grid-cols-[1.5fr_1fr_0.3fr_0.3fr]">
        <div className="flex lg:flex-row flex-col lg:items-center gap-2.5">
          <div className="w-[46.5px] h-12.25 rounded-[10px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://www.allrecipes.com/thmb/_OKqViGmlNaa9GV_c4cpwpwApGk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Smokey Supreme Pizza</p>
            <p className="text-[#8E8E8E]">Breakfast</p>
          </div>
        </div>
        <p>1</p>
        <p>$12.00</p>
        <p className="font-semibold text-base">$12.00</p>
      </div>
      <div className="mt-2.75 text-sm">
        <p>
          <span className="font-bold">Chose A Bagel:</span> Sesame
        </p>
        <p>
          <span className="font-bold">Additions:</span> Pepsi Drink
        </p>
        <p>
          <span className="font-bold">To Remove:</span> Mushrooms
        </p>
        <p>
          <span className="font-bold">Special Note:</span> Served with egg fried
          rice or steamed rice and chicken egg roll or vegetable
        </p>
      </div>
    </div>
  );
}
