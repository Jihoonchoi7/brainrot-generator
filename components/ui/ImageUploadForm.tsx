import { useState } from "react";

interface ImageUploadFormProps {
    onGenerate: (image: File, prompt: string) => Promise<void>;
}

export default function ImageUploadForm({ onGenerate }: ImageUploadFormProps) {
    const [image, setImage] = useState<File | null>(null);
    const [prompt, setPrompt] = useState("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image && prompt) {
            await onGenerate(image, prompt);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="file" onChange={handleImageChange} accept="image/*" required />
            <input
                type="text"
                placeholder="Enter your prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
                className="border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Generate Brain Rot
            </button>
        </form>
    );
} 