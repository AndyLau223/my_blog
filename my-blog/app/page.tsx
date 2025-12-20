import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Image
          src="/photo.jpg"
          alt="Andy Liu"
          width={150}
          height={150}
          className="rounded-full border"
          priority
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            Hi, I’m Andy 👋
          </h1>
          <p className="text-lg text-gray-600">
            A full-stack software engineer focused on 
            application development, DevSecOps, and
            cloud computing. Recently, I&apos;ve been expanding my skills into AI.
          </p>
        </div>
      </section>


      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Experience
        </h2>
        <p className="text-gray-600">
          I have several years of experience building
          enterprise-grade applications, working across
          backend systems, cloud infrastructure, and
          containerized platforms.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Cloud-native systems on GCP & AWS</li>
          <li>Backend development with Java & Spring</li>
          <li>Kubernetes, Docker, Terraform</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Certifications
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>
            <span className="font-medium">
              Google Cloud Professional Certifications (4)
            </span>
            <span className="text-sm text-gray-500">
              {" "}– Cloud Architect, DevOps Engineer, Security Engineer, Database Engineer
            </span>
          </li>

          <li>
            <span className="font-medium">
              AWS Certified Solutions Architect – Professional
            </span>
            <span className="text-sm text-gray-500">
              {" "}– Amazon Web Services
            </span>
          </li>

          <li>
            <span className="font-medium">
              Certified Kubernetes Administrator (CKA) & Certified Kubernetes Security Specialist (CKS)
            </span>
            <span className="text-sm text-gray-500">
              {" "}– CNCF
            </span>
          </li>

          <li>
            <span className="font-medium">
              Red Hat Certified System Administrator (RHCSA) & Red Hat Certified Engineer (RHCE)
            </span>
            <span className="text-sm text-gray-500">
              {" "}– Red Hat
            </span>
          </li>

        </ul>
      </section>


      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillGroup
            title="Backend"
            items={[
              "Java / Python",
              "Spring / Django / FastAPI",
              "SQL & JDBC",
              "API Design",
            ]}
          />
          <SkillGroup
            title="Cloud & DevOps"
            items={[
              "Google Cloud Platform",
              "AWS",
              "Kubernetes",
              "Terraform",
              "Docker",
            ]}
          />
          <SkillGroup
            title="Frontend & Others"
            items={[
              "React / Next.js",
              "TypeScript",
              "Linux",
              "System Design",
            ]}
          />
        </div>
      </section>

      {/* Hobbies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Beyond Coding
        </h2>
        <p className="text-gray-600">
          Outside of work, I enjoy exploring new
          technologies, writing technical notes, and
          continuously improving my understanding of
          systems and software design.
        </p>
      </section>


      {/* CTA */}
      <section className="flex gap-6">
        <Link
          href="/blog"
          className="underline font-medium"
        >
          Read the blog →
        </Link>
        <Link
          href="/category"
          className="underline font-medium"
        >
          Browse categories →
        </Link>
      </section>
    </div>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold mb-2">
        {title}
      </h3>
      <ul className="text-gray-600 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
