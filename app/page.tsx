import Image from "next/image";
import ImageUploadForm from "../components/ui/ImageUploadForm";
import GeneratedImages from "../components/ui/GeneratedImages";
import Replicate from "replicate";
import { useState } from "react";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

interface ReplicateOutput {
  images: string[];
}

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  const handleGenerate = async (image: File, prompt: string) => {
    const input = {
      prompt,
      aspect_ratio: "3:2",
    };

    try {
      const output = await replicate.run("stability-ai/stable-diffusion-3.5-large-turbo", { input }) as ReplicateOutput;
      setImages(output.images || []);
    } catch (error) {
      console.error("Error generating images:", error);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Brainrot Translator</h1>
      <ImageUploadForm onGenerate={handleGenerate} />
      <GeneratedImages images={images} />
    </div>
  );
}
