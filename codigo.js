// Get all the images
image_array = [
  'bercouli.png', 'fives.png', 'franky.webp', 'gauma.jpg', 'geese.png', 'himmel.webp', //6
  'hinata.jpg', 'kanna.png', 'klein.jpeg', 'kotaro.jpg', 'lewis.jpeg', 'maki.jpg', //6
  'medina.png', 'mumen_rider.jpg', 'qrow.jpg', 'ray.jpg', 'rengoku.png', 'sasha.webp', //6
  'suwa.jpg', //1
]//19

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.body.background = `wallpapers/${selected_image}`
}