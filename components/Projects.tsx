import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Domain Guru",
      desc: "Developed a web app with 4 Micro Frontends (MFE) that allows users to buy domains and complete payments. Utilized Docker and Kubernetes for orchestration."
    },
    {
      title: "Insignia Loyalty Experience",
      desc: "Built a microservice solution to enhance user engagement, featuring a customizable dashboard for campaigns and addressing customer pain points."
    },
    {
      title: "ServerSentEvents (SSE) Microservice",
      desc: "Created a microservice implementing real-time text streaming using SSE protocol, event-driven architecture, and pub-sub for scalability."
    },
    {
      title: "Auth Service",
      desc: "Built a secure auth service using JWT, OAuth, and 2FA for credential management, and automated migration for legacy users."
    },
    {
      title: "Invoicing Service",
      desc: "Developed a service for managing client payments and generating invoices with automatic payment reminders and multiple templates."
    }
  ];

  return (
    <section id="projects" className="text-white p-20 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10">🪐 Space Missions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <Card
            key={i}
            className="bg-indigo-900/20 border border-indigo-500 text-white rounded-xl shadow-xl p-4 hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-indigo-300">{proj.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}