import React, { useState } from "react";

export default function ImageUploadForm({ onGenerate }) {
    const [image, setImage] = useState(null);
    const [prompt, setPrompt] = useState("");

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image && prompt) {
            await onGenerate(image, prompt);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="file" onChange={handleImageChange} accept="image/*" required className="border p-2 rounded" />
            <input
                type="text"
                placeholder="Enter your prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
                className="border p-2 rounded w-full max-w-md"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-1/2 mx-auto">
                Generate Brain Rot
            </button>
        </form>
    );
} 