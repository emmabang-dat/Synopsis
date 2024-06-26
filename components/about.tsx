import { getAboutData } from "@/lib/api";

export default async function About() {
  const aboutData = await getAboutData();

  return (
    <section
      style={{ backgroundColor: aboutData.backgroundColor.value }}
      className="py-12 md:py-16 lg:py-20"
      id="about"
    >
      <div className="container mx-auto">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex flex-row gap-8">
            <div>
              <img
                alt="About me"
                className="rounded-3xl"
                height="1000"
                src={aboutData?.image?.url}
                style={{
                  objectFit: "cover",
                }}
                width="1000"
              />
            </div>
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {aboutData?.aboutHeader}
              </h2>
              <div className="space-y-2 md:space-y-3 lg:space-y-4 text-gray-600 leading-relaxed">
                {aboutData?.aboutText
                  .split("\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
