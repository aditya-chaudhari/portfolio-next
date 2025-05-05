export default function Skills() {
  const skills = [
    "Java", "SpringBoot", "React", "Node.js", "MySQL", "MongoDB", "Docker", "Kubernetes",
    "AWS", "Jenkins", "Git", "Hibernate", "Webpack", "Liquibase", "Veracode", "Postman",
    "Cloudflare", "DynamoDB", "CI/CD", "XMatters", "OpenShift"
  ];
  return (
    <section id="skills" className="text-white py-20 bg-gradient-to-b from-black via-indigo-900 to-black">
      <h2 className="text-3xl font-bold text-center mb-10">🛠️ Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6 md:w-2/3 mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="px-4 py-2 border border-indigo-400 rounded-full bg-white/10 text-indigo-100 shadow hover:scale-105 hover:bg-indigo-600 transition transform duration-200">
            {skill}
        </div>
        ))}
      </div>
    </section>
  );
}
  