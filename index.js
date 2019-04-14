var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({recipes}, object, {[key]: value})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign({recipes}, object, {[key]: value})
  return recipes
}
