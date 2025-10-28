function WorkExpInfo(props) {
  const { workExp } = props;
  console.log(workExp);

  return (
    <section>
      {workExp.length > 0 &&
        workExp.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.company}</h1>
              <p>{item.title}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
    </section>
  );
}
export default WorkExpInfo;
