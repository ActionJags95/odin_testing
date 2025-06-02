function FibIter(num) {
  console.log("This function implements the iterative approach");
  let ans = [];
  let num0 = 0,
    num1 = 1;

  ans.push(num0);
  ans.push(num1);

  for (let i = 2; i <= num; i++) {
    let num = num0 + num1;
    num0 = num1;
    num1 = num;

    ans.push(num);
  }

  return ans;
}

console.log(FibIter(8));

function FibRecur(num) {
  console.log("This function is implemented recursively");

  let ans = Array(num + 1).fill(-1);
  ans[0] = 0;
  ans[1] = 1;

  function fun(num) {
    if (num == 1 || num == 0) return num;

    if (ans[num] != -1) return ans[num];
    else {
      let res = fun(num - 1) + fun(num - 2);
      return (ans[num] = res);
    }
  }

  fun(num);
  return ans;
}

console.log(FibRecur(8));
