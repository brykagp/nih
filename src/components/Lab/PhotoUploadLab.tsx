import Image from "next/image";
import { useState } from "react";
import { FiTrash, FiUploadCloud, FiFileText } from "react-icons/fi";

export default function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const handleDeleteFile = (file: File) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
        <FiUploadCloud className="text-3xl text-gray-500" />
        <span className="mt-2 text-gray-600">Click to Upload</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileUpload}
          accept="image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          multiple
        />
      </label>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-3">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-3 p-2 border rounded-lg bg-gray-50">
              {file.type.startsWith("image") ? (
                <Image width={50} height={50} src={URL.createObjectURL(file)} alt={file.name} className="w-12 h-12 object-cover rounded-md" />
              ) : (
                <FiFileText className="text-2xl text-blue-500" />
              )}
              <span className="text-sm text-gray-700 truncate w-48">{file.name}</span>
              <button onClick={() => handleDeleteFile(file)} className="text-red-500 hover:text-red-700">
                <FiTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}