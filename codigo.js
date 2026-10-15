// Get all the images
main = [
  'yurippe.jpeg', 'chise.png', 'emma.png', 'nabe.png', 'eriri.jpg', 'haruhi.jpg', //6
  'hinata.png', 'jibril.jpg', 'kyaru.png', 'megumin.jpg', 'midori.jpg', 'mimimi.jpg', //6
  'nodoka.png', 'olivia.png', 'rebecca.jpg', 'rem.jpg', 'rumia.jpg', 'sinon.jpg', //6
  'tatsumaki.jpg', 'tsukimi.png', 'weiss.jpg', 'yui.jpeg', 'yume.jpg', 'nowa.png', //6
  'serina.png', 'mieruko.png', 'kani.png', 'alice.png', 'futaba.png', 'hayasaka.png', //6
  'konami.png', 'marija.png', 'subaru.png', 'ume.png', 'yumechi.png', 'touko.png',//6
]//36

work = [
  'bercouli.png', 'fives.png', 'franky.webp', 'gauma.jpg', 'geese.png', 'himmel.webp', //6
  'hinata.jpg', 'kanna.png', 'klein.jpeg', 'kotaro.jpg', 'lewis.jpeg', 'maki.jpg', //6
  'medina.png', 'mumen_rider.jpg', 'qrow.jpg', 'ray.jpg', 'rengoku.png', 'sasha.webp', //6
  'suwa.jpg', 'faldio.jpg',//2
]//19


function get_random_image(area){

  if (area == "main") {
      image_array = main;
    } else {
      image_array = work;
    }

  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.body.background = `wallpapers_${area}/${selected_image}`
}

function get_fixed_image(index){
  selected_image = image_array[index]
  document.body.background = `wallpapers_${area}/${selected_image}`
}