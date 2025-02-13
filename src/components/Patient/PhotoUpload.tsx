import Image from "next/image";
import { useState } from "react";
import { FiTrash, FiUploadCloud } from "react-icons/fi";

export default function PhotoUpload() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const imageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };

  const handleDeleteImage = (imageUrl: string) => {
    setUploadedImages((prevImages) => prevImages.filter((img) => img !== imageUrl));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Upload Test Kit Photo</h2>
      <input
        type="file"
        className="mt-2 border p-2"
        onChange={handleFileUpload}
        accept="image/*"
        multiple
      />
      <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white flex items-center gap-2">
        <FiUploadCloud /> Upload
      </button>

      {/* Uploaded Images Gallery */}
      {uploadedImages.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {uploadedImages.map((imageUrl, index) => (
            <div key={index} className="relative">
              <Image
              width={300}
              height={300}
                src={imageUrl}
                alt={`Uploaded ${index}`}
                className="w-full h-32 object-contain rounded-md border"
              />
              <button
                onClick={() => handleDeleteImage(imageUrl)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
