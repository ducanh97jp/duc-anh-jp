let loan = parseInt(prompt("số tiền vay la: "));
let interestRate = prompt("Lãi xuất phần trăm mỗi năm là: ");
let year = prompt("Số năm vay là: ");
let interest = ((loan * interestRate) / 100);
interest += loan;

 
document.write("Số tiền phải trả là: " + interest );