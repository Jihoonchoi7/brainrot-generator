"use client";

interface GeneratedImagesProps {
    images: string[]; // Assuming images is an array of strings (URLs)
}

export default function GeneratedImages({ images }: GeneratedImagesProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {images.map((image: string, index: number) => (
                <div key={index} className="relative">
                    <img src={image} alt={`Generated ${index}`} className="w-full h-auto" />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                        <button className="bg-green-500 text-white">Like</button>
                        <button className="bg-red-500 text-white">Download</button>
                    </div>
                </div>
            ))}
        </div>
    );
} 