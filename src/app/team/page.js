// pages/team.js or app/team/page.js
import Image from 'next/image'

const TeamMemberCard = ({ member }) => {
  return (
    <div 
      key={member.id} 
      className="group relative text-center p-8 border border-white/20 rounded-3xl bg-transparent backdrop-blur-none transition-all duration-300 hover:-translate-y-3 hover:border-white/30 w-[320px] h-[400px] overflow-hidden"
    >
      <div className="mb-8 flex justify-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-105">
          <Image
            src={member.image}
            alt={member.name}
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-white">
        {member.name}
      </h3>
      <p className="text-base leading-relaxed text-white/80">
        {member.position}
      </p>
      <p className="text-base leading-relaxed text-white/80">
        {member.description}
      </p>
    </div>
  );
};






const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dilip Kumar",
      position: "Founder and MD",
      image: "/ad.jpeg",
      description: "Leading strategic direction and growth of the company."
    },
    {
      id: 2,
      name: "Prashanth Nair",
      position: "Investor and Director",
      image: "/ad.jpeg",
      description: "Supports the vision with insights and investments."
    },
    {
      id: 3,
      name: "Manish Kumar",
      position: "Advisor",
      image: "/ad.jpeg",
      description: "Drives process optimization and innovation."
    },
    {
      id: 4,
      name: "Amit Kulshreshtha",
      position: "Advisor",
      image: "/ad.jpeg",
      description: "Heads all sales efforts and strategy."
    },
    {
      id: 5,
      name: "Nagendra Sastry",
      position: "Advisor",
      image: "/ad.jpeg",
      description: "Manages financial planning and operations."
    }
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/silk.jpg"
          alt="Team background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative  z-10 px-6 py-10 mx-auto max-w-7xl text-white lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 ">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/80">
            COMPANY MANAGEMENT
          </p>
          <h1 className="text-3xl  md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Meet the team that makes<br />
            the magic happens
          </h1>
        </div>

        {/* Top Row - 2 Cards */}
        <div className="max-w-3xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 justify-items-center
Advisor

Drives process optimization and innovation.

nter">
          {teamMembers.slice(0, 2).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {teamMembers.slice(2).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
