import { useRef } from "react";

interface Props {
  imageUrl?: string;
  loading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadImage({ imageUrl, loading, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!loading) {
      inputRef.current?.click();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          imageUrl ? "h-66.25 w-97.5" : "h-24 w-33"
        } relative flex  cursor-pointer items-center justify-center rounded border-2 border-dashed border-[#D9D9D9] bg-white overflow-hidden hover:bg-gray-50`}
      >
        {loading && (
          <span className="text-sm font-medium text-gray-500">
            Uploading...
          </span>
        )}

        {!loading && imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded"
            className="h-full w-full object-cover"
          />
        )}

        {!loading && !imageUrl && (
          <div className="flex flex-col items-center">
            <span className="text-3xl font-light text-gray-400">+</span>
            <span className="text-sm font-semibold text-[#194128]">
              Upload Image
            </span>
          </div>
        )}

        {!loading && imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition hover:opacity-100">
            <span className="text-sm font-semibold text-white">
              Change Image
            </span>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />
    </>
  );
}
