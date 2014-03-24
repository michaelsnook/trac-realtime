/*
if (this is a wiki page) {
  x = etherpad.api_get(this_page_name);
  
  if (!x) {
    // initialize pad with trac wiki contents
    e = etherpad.api_create(this_page_name);
    t = $('tracform').val()
    e.contents(t);
  }
      
  //now that it's surely created
  
  hide(default input section);
  etherpad.api_embed(this pad);
  
  $('button.main_submit_button').submit(function() {
    get the contents of the current pad from the server and put it into the textarea
    return true;
  });

  $('button.main_preview_button').submit(function() {
    get the contents of the current pad from the server and put it into the textarea
    return true;
  });


}
*/
