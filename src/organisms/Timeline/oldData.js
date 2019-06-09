{oldData.map(job => (
  <FadeTimelineItem>
    <span className="date">
      {job.dates}
    </span>
    <h2>
      {job.companyName}
    </h2>
    <h3>
      <span className="icon">
        {icons[job.icon]}
      </span>
      {job.jobTitle}
    </h3>
  </FadeTimelineItem>
))}

export default [
  {
    dates: "2016 - 2017",
    companyName: "Just Teachers",
    icon: "work",
    jobTitle: "Supply Primary Teacher",
  },
  {
    dates: "2014 - 2016",
    companyName: "Manchester Metropolitan University",
    icon: "study",
    jobTitle: "PGCE in Primary Education",
  },
  {
    dates: "2004 - 2008",
    companyName: "University of Salford",
    icon: "study",
    jobTitle: "BA (Hons) Popular Music and Recording",
  },
  {
    dates: "1997 - 2003",
    companyName: "Wycombe High School",
    icon: "study",
    jobTitle: "4 A-levels, 9 GCSEs",
  },
]