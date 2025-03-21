// Get all the images
image_array = [
  'yurippe.jpeg', 'chise.png', 'emma.png', 'erika.png', 'eriri.jpg', 'haruhi.jpg', //6
  'hinata.png', 'jibril.jpg', 'kyaru.png', 'megumin.jpg', 'midori.jpg', 'mimimi.jpg', //6
  'nodoka.png', 'olivia.png', 'rebecca.jpg', 'rem.jpg', 'rumia.jpg', 'sinon.jpg', //6
  'tatsumaki.jpg', 'tsukimi.png', 'weiss.jpg', 'yui.jpeg', 'yume.jpg', 'nowa.png', //6
  'serina.png', 'mieruko.png', 'kani.png', 'alice.png', 'futaba.png', 'hayasaka.png', //6
  'konami.png', 'marija.png', 'subaru.png', 'ume.png', 'yumechi.png', //5
]//35

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.body.background = `wallpapers/${selected_image}`
}