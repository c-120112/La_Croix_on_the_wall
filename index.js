//99 Cans Challenge

var lyric_output = [];
var lyric_count = 99;

function la_croix_song() {
  
  while (lyric_count >= 2) {

  lyric_output.push(lyric_count + " cans of La Croix on the wall, " + lyric_count + " cans of La Croix, take one down, pass it around ");
  lyric_count--;
  lyric_output.push(lyric_count + " cans of La Croix on the wall.");
  
  if (lyric_count === 1){
  lyric_output.push(lyric_count + " cans of La Croix on the wall, " + lyric_count + " cans of La Croix, take one down, pass it around, No more cans of La Croix on the wall.");
  }
  
  }
    console.log(lyric_output);
}