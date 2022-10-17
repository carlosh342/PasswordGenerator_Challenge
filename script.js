// Assignment code here
// Variables are created and assigned their characters counterparts.
var Numbers ="0123456789";
var UpperCase_Letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var Special_char = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var LowerCase_Letters = "abcdefghijklmnopqrstuvwxyz";
// Function generate password is called. Other variables are created to help with the process. 
function generatePassword(){
  var pass_length=0;
  var empty_string="";
  var full_string="";
  /* The user decides password lenght. If-else statements make sure the number choosen is between parameters established. A while loop is used to ensure
   the user chooses a correct number*/ 
  let i=0;
  while(i<1) {
    var pass_input =parseFloat(window.prompt("What is your desired password length? Choice must be between 8 to 128 characters.",""));
    if (pass_input>=8 && pass_input<=128 ){
      pass_length=pass_input;
      i++;
    }else{
       window.prompt("Try Again.Password must between 8 to 128 characters long");
    }}
  // A do-while loop is used (alongside confirm prompts and if statements) to ensure the user chooses a character type to be included in the password creator algorithm.
  let x =0;
  do {
    window.prompt("What types of characters would you like your password to have? Click ok if you want the option, cancel if not.If nothing is selected,this prompt will be repeated!!!.");
    var uppercase =window.confirm("Would you like your password to have uppercase letters?");
    if(uppercase==true){
      empty_string=empty_string.concat(UpperCase_Letters);
      x++; }
    var lowercase =window.confirm("Would you like your password to have lowercase letters?");
    if(lowercase==true){
      empty_string=empty_string.concat(LowerCase_Letters);
      x++;}
    var specialcharc =window.confirm("Would you like your password to have special characters?");
    if(specialcharc==true){
      empty_string=empty_string.concat(Special_char);
      x++;}
    var numbers =window.confirm("Would you like your password to have numeric values?");
    if(numbers==true){
      empty_string=empty_string.concat(Numbers);
      x++;}}
  while(x<1);
  // A for loop is used in the password creation algorithm, which consists of a psudorandom number generator to substring a string created by 
  // combining the character type strings the user chose previously.
  for(var j=1;j<=pass_length;j++){
    let randomcharacter =Math.floor(Math.random() * empty_string.length);
    full_string=full_string+empty_string.substring(randomcharacter,randomcharacter+1)
  }
  // The password value is returned
  return full_string;
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
