/* Question 2 */
const score = 15;
let remark = "fail" /* fallback */


remark = score >= 35 ? "fail" : remark;
remark = score >= 40 ? "fair": remark;
remark = score >= 45 ? "pass" : remark;
remark = score >= 50 ? "good" : remark;
remark = score >= 60 ? "verygood" : remark;
remark = score >= 70 ? "excellent" : remark;

console.log(remark)



/* Question 1 */

console.log(num = 10 / 5 ? "Even Number" : "Odd Number");