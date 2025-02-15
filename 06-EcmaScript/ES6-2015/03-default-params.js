// ❌
function newName(name, age, country) {
  var name = name || 'Cristian';
  var age = age || 37;
  var country = country || 'AR';
  console.log(name, age, country);
}

newName();
newName('Male', 34, 'UK');

///////////////////////////////////
// ✅
function newAdmin(name = 'Emiliano', age = 18, country = 'AR') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Jose', 33, 'BR');