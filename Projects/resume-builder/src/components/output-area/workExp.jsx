function WorkExpInfo(props) {
  const { workExp } = props;

  console.log(workExp.length);
  return <div>{workExp.length && <div>Hello</div>}</div>;
}

export default WorkExpInfo;
