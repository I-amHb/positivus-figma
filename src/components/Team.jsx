
const Team = () => {

  const team = [
    { path: '/Picture1.png', name: 'John Smith', role: 'CEO and Founder', about: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' },
    { path: '/Picture2.png', name: 'Jane Doe', role: 'Director of Operations', about: '7+ years of experience in project management and team leadership. Strong organizational and communication skills' },
    { path: '/Picture3.png', name: 'Michael Brown', role: 'Senior SEO Specialist', about: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' },
    { path: '/Picture4.png', name: 'Emily Johnson', role: 'PPC Manager', about: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' },
    { path: '/Picture5.png', name: 'Brian Williams', role: 'Social Media Specialist', about: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' },
    { path: '/Picture6.png', name: 'Sarah kim', role: 'Content Creator', about: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries' },
  ]

  return (
    <section className='px-padding-sm lg:px-padding-lg h-auto '>
      <div className='mt-16 flex flex-col justify-center gap-5 lg:gap-8 items-center lg:flex-row lg:justify-start'>
        <h1 className=""><span className='p-1 rounded text-lar font-bold bg-primary text-center'>Team</span></h1>
        <p className='text-center max-w-[505px] lg:text-left'>Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div>
        <div className='team-container mt-padding-md  grid justify-center gap-6'>
          {team.map((person) => (
            <div className='border-2 max-w-[400px] md:max-w-full border-b-7 rounded-4xl p-padding-smid'>
              <div className='flex pb-3'>
                <div className='team-pic flex items-center w-25 mr-4'><img src={person.path} alt={`${person.name}'s image`} /></div>
                <div className='w-full '>
                  <div className='w-full flex  justify-end'><img className='w-7 self-end' src="/LinkedIn-icon.png" alt="linkedin icon" /></div>
                  <div>
                    <h1 className='font-bold'>{person.name}</h1>
                    <h4>{person.role}</h4>
                  </div>
                </div>
              </div>
              <div className='border-t-2 pt-3'>
                <p>{person.about}</p>
              </div>
            </div>
          ))
          }
        </div>
        <div className="team-button-container w-full mt-7 flex justify-center">
          <button
            className='team-button h-16 w-full max-w-[400px] md:w-2/3 lg:max-w-[250px]self-center lg:self-start
                        p-2 px-8 rounded-xl border-[1.5px] text-white bg-secondary'
          >
            See all team
          </button>
        </div>
      </div>

    </section>
  )
}

export default Team