"use client";
import * as React from "react";

import { ProgressStepper } from "./progress-indicator";
import { ImageUploadArea } from "./image-upload-area";
import { UploadedImage } from "./uploaded-image";
import { FormNavigationFooter } from "./form-navigation-footer";

interface MenuImagesStepProps {
  onBack: () => void;
  onContinue: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

export const CreateMenuStep3: React.FC<MenuImagesStepProps> = ({
  onBack,
  onContinue,
  formData,
  updateFormData,
}) => {
  const [uploadedImages, setUploadedImages] = React.useState<File[]>(
    formData.uploadedImages || [],
  );

  // Sync local state with parent form data
  React.useEffect(() => {
    updateFormData({ uploadedImages });
  }, [uploadedImages, updateFormData]);

  const handleBack = () => {
    onBack();
  };

  const handleContinue = () => {
    if (canContinue) {
      onContinue();
    }
  };

  const progressSteps = [
    { id: "details", label: "Details", isCompleted: true },
    { id: "menu-prices", label: "Menu & prices", isCompleted: true },
    { id: "menu-images", label: "Menu images", isCompleted: true },
    { id: "finish-upload", label: "Finish upload", isCompleted: false },
  ];

  const handleImageSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);

    setUploadedImages((prev) => [...prev, ...newFiles]);
  };

  const handleDeleteImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const canContinue = uploadedImages.length > 0;

  return (
    <div className="flex flex-col w-full max-w-[655px] mx-auto">
      <header className="text-xl font-semibold text-black mb-6">
        Create menu
      </header>

      <div className="bg-white rounded-2xl border border-solid shadow-lg border-neutral-200 p-6 w-full">
        <div className="mb-8">
          <ProgressStepper steps={progressSteps} />
        </div>

        <div className="mt-6 flex flex-col items-center w-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Upload menu images
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Upload high-quality images of your menu items. You can upload up to
            5 images.
          </p>
          <div className="w-full flex justify-center">
            <ImageUploadArea onImageSelect={handleImageSelect} />
          </div>
          {uploadedImages.length > 0 && (
            <div className="mt-6 w-full flex flex-col items-center">
              <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">
                Uploaded images ({uploadedImages.length})
              </h3>
              <div className="grid grid-cols-1 gap-4 justify-items-center">
                {uploadedImages.map((file, index) => (
                  <UploadedImage
                    key={index}
                    imageUrl={URL.createObjectURL(file)}
                    onDelete={() => handleDeleteImage(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/4e5e0e8d7af4287197a7d5d0575a23c15b68d216?placeholderIfAbsent=true"
          alt=""
          className="object-contain mt-28 w-full aspect-[500] stroke-[1px] stroke-neutral-200 max-md:mt-10 max-md:max-w-full"
        />

        <FormNavigationFooter
          onBack={handleBack}
          onContinue={handleContinue}
          disabled={!canContinue}
        />
      </div>
    </div>
  );
};

export default CreateMenuStep3;
