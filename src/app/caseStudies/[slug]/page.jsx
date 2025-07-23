import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudy";


export default function CaseStudyDetail({ params }) {
  const caseStudy = caseStudies.find((b) => b.slug === params.slug);
  if (!caseStudy) return notFound();

  return (
    <div className="min-h-screen bg-[#fefcfb] text-[#1f2937] px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1px_1fr] gap-8">
        {/* Main Case Study Content */}
        <div className="col-span-1">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            width={800}
            height={400}
            className="rounded-xl mb-8 border border-[#e5e7eb] shadow-sm object-cover"
          />

          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#111827] leading-tight">
            {caseStudy.title}
          </h1>

          {/* Author & Date */}
          <div className="mb-8 text-sm text-[#6b7280] flex items-center gap-4">
            <span>
              By{" "}
              <span className="font-medium text-[#374151]">
                {caseStudy.author}
              </span>
            </span>
            <span className="text-[#d1d5db]">|</span>
            <span>{caseStudy.date}</span>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-[#374151]">
            {caseStudy.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="whitespace-pre-line">
                      {block.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-xl md:text-2xl font-semibold mt-8 text-[#2563eb] border-b border-gray-300 pb-1"
                    >
                      {block.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={index} className="space-y-3 mt-3">
                      {block.items.map((item, i) => (
                        <li key={i}>
                          <p className="text-[17px] font-semibold text-[#1f2937] mb-1">
                            {item.title}
                          </p>
                          <p className="text-[#4b5563]">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  );
                case "bullets":
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside space-y-2 pl-4 text-[#4b5563]"
                    >
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-full h-full border-r border-gray-200"></div>

        {/* Sidebar */}
        <aside className="col-span-1 sticky top-20 h-fit bg-white border border-gray-200 rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold text-[#111827] mb-4">More Case Studies</h3>
          <ul className="space-y-3 text-sm">
          {caseStudies.map((b) => {
  const isActive = b.slug === params.slug;
  return (
    <li key={b.slug}>
      <Link
        href={`/case-studies/${b.slug}`}
        className={`block px-3 py-2 rounded-md transition font-medium ${
          isActive
            ? "border border-purple-500 text-purple-700 bg-purple-50"
            : "text-[#374151] hover:text-[#2563eb]"
        }`}
      >
        {b.title}
      </Link>
    </li>
  );
})}

          </ul>
        </aside>
      </div>
    </div>
  );
}
