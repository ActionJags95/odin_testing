import './JournalEntry.css'

function JournalEntry(props) { // all the parameters passed as attributes to component tags are the members of the props object
  // For example: if the tag is <JournalEntry name={} place={}>
  // props object consists of name and place as props.name and props.place

  let {src, info, date, maplink, country, location} = props.loc;
  console.log(props); // Gets the overall props object, containing the all the attribute values
  console.log(props.location); // Gets one of the attributes of the props object
  // console.log(src);
  console.log(props.number);

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