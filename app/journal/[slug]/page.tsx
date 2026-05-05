/* eslint-disable @next/next/no-img-element */
import { demoCards } from "@/lib";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ FIX

  const card = demoCards.find((item) => item.slug === slug);

  if (!card) {
    return (
      <div className="p-10 text-center text-red-500">
        Data not found for slug: {slug}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F1E8] p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
        <p className="text-gray-500 mb-2">{card.date}</p>
        <p className="mb-6">Category: {card.category}</p>

        {/* Only IMAGE */}
        {card.image && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={
              typeof card.image === "string"
                ? card.image
                : ""
            }
            className="rounded-lg w-full"
          />
        )}

        {!card.image && (
          <p className="text-gray-600">No image available</p>
        )}
      </div>
    </div>
  );
}