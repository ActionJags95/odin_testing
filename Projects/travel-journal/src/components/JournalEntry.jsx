import './JournalEntry.css'

function JournalEntry(props) {

  let {src, info, date, maplink, country, location} = props.location;
  console.log(props);
  // console.log(src);

  return (
    <>
      <div className='journal-card'>
        <div className='image-cont'>
          <img src={src} alt={location} />
        </div>
        <div className='text-cont'>
          <div className='title'>
            <span className='location'>
              <p><img src="/src/assets/images/marker.png" alt="" /> {country}</p>
              <p><a href={maplink}>View on Google Maps</a></p>
            </span>
            <span><h1>{location}</h1></span>
          </div>
          <div className='info'>
            <p id='date'>{date}</p>
            <p id='desc'>{info}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default JournalEntry;