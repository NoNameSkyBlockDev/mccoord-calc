window.onload = function(){
  const selbox_world = document.getElementById("now_world");
  const output_world = document.getElementById("output_world");
  const input_x = document.getElementById("coord_inx");
  const input_y = document.getElementById("coord_iny");
  const input_z = document.getElementById("coord_inz");
  const output_x = document.getElementById("coord_outx");
  const output_y = document.getElementById("coord_outy");
  const output_z = document.getElementById("coord_outz");
  let coords = [];
  let output_coords = [];
  let world_now = "Overworld";
  function get_nowworld() {
    world_now = selbox_world.value;
    if(world_now == "Overworld") {output_world.innerText = "Nether";}else {output_world.innerText = "Overworld";};
    calc_coords()
  };
  function calc_coords() {
    coords = [Number(input_x.value),Number(input_y.value),Number(input_z.value)];
    if(world_now == "Overworld") {
      output_coords = coords.map(x => Math.floor(x/8));
      output_coords[1] = coords[1];
    }else {
      output_coords = coords.map(x => x*8);
      output_coords[1] = coords[1];
    };
    output_x.value = output_coords[0];
    output_y.value = output_coords[1];
    output_z.value = output_coords[2];
  }
  selbox_world.addEventListener("change",get_nowworld);
  input_x.addEventListener("change",calc_coords);
  input_y.addEventListener("change",calc_coords);
  input_z.addEventListener("change",calc_coords);
  get_nowworld();
}
